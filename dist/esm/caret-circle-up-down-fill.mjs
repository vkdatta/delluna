export const name="caret-circle-up-down-fill";
export const id="dl_53cf6dae6fc7480a9f2a";
export const url=new URL("../icons/caret-circle-up-down-fill.svg?v=454b197e8dad87ed57426fbd2304f17753e1d6439ea2593b8afae30fd82684da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
