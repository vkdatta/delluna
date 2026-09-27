export const name="how_to_reg";
export const id="dl_134f728235b049cf96f5";
export const url=new URL("../icons/how_to_reg.svg?v=bdc82e9440bc9d9e9b1ecd262c9e21b9ce5c9b9f1b8326f7b3d6a88718f8d0a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
