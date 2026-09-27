export const name="align_vertical";
export const id="dl_f3eabe65976295092884";
export const url=new URL("../icons/align_vertical.svg?v=7cfb60a67917efb82bc500a5b1a056e837c005391afd53d88e19db3dad8340e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
