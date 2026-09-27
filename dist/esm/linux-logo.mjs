export const name="linux-logo";
export const id="dl_b898449c5eab4fd5ae66";
export const url=new URL("../icons/linux-logo.svg?v=bd73b624c529f163b0c8166941c71da1d775afec5e41a3d598eacdc4db335004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
