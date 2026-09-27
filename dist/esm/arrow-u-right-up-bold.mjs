export const name="arrow-u-right-up-bold";
export const id="dl_5bec561247fa4c7f9b23";
export const url=new URL("../icons/arrow-u-right-up-bold.svg?v=be20d56fdbd8ea91a8eeee886bc7a248d1d749605f25bc048a219c37ba5ba41b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
