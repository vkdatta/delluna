export const name="dresser-bold";
export const id="dl_1c17e52e18c04108a729";
export const url=new URL("../icons/dresser-bold.svg?v=3ae833c1a58d8e9afef6c1d491b24944eb2326e521a3ba999ae8fe8ed2f1c982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
