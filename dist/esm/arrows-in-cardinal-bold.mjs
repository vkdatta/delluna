export const name="arrows-in-cardinal-bold";
export const id="dl_088ab09947f7488d9d39";
export const url=new URL("../icons/arrows-in-cardinal-bold.svg?v=e882100fd6c70f7c4986eedc37b239d51c1d6a79b2bb8cfd04198af8ad2ae483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
