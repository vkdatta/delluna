export const name="playground_2";
export const id="dl_dd024bd0bb1242bb97bf";
export const url=new URL("../icons/playground_2.svg?v=f6be03be93544e1dbe9f536f867c975a819faf212a88dc226dbc6f21d678bc4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
