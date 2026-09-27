export const name="jar-label-bold";
export const id="dl_4f3e06d9544e498ebed7";
export const url=new URL("../icons/jar-label-bold.svg?v=97f0436232b13b04599f115347c15bc11c4febd02ed37d341b63fa853f3173ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
