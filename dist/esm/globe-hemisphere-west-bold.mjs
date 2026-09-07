export const name="globe-hemisphere-west-bold";
export const id="dl_bebc114615c84a05b233";
export const url=new URL("../icons/globe-hemisphere-west-bold.svg?v=7a987b39b0fd22fc0adbebe1083d54b187559d76db767e790649f79b1951489b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
