export const name="square-split-horizontal";
export const id="dl_7acd7e23aa264c4284cc";
export const url=new URL("../icons/square-split-horizontal.svg?v=5fb4fe4d013cd36b3d5c46d81cd77a348f5f8fd60921543fe38dea926b08106d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
