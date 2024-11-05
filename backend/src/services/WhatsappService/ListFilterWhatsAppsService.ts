import { FindOptions } from "sequelize/types";
import Whatsapp from "../../models/Whatsapp";

interface Request {
  companyId: number;
  session?: number | string;
  channel?: string;
}

const ListFilterWhatsAppsService = async ({
  session,
  companyId,
  channel = "whatsapp"
}: Request): Promise<Whatsapp[]> => {
  const options: FindOptions = {
    where: {
      companyId,
      channel
    }
  };

  if (session !== undefined && session == 0) {
    options.attributes = { exclude: ["session"] };
  }

  const whatsapps = await Whatsapp.findAll(options);

  return whatsapps;
};



export default ListFilterWhatsAppsService;
