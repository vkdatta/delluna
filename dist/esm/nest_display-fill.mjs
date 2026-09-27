export const name="nest_display-fill";
export const id="dl_ec6ebf14b4103f6d53c7";
export const url=new URL("../icons/nest_display-fill.svg?v=c1593611a471cc3b7f59606db6c89aa0d7705d5089776a4d878c001c9d670038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
