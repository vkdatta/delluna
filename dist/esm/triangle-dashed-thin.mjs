export const name="triangle-dashed-thin";
export const id="dl_9fed132213d3e4b8ea24";
export const url=new URL("../icons/triangle-dashed-thin.svg?v=4b34acd8ffff895d3182b1894771a8915d296528b38b1924b8dd23f9368b7da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
