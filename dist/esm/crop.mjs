export const name="crop";
export const id="dl_a26c8003383d4045b7cb";
export const url=new URL("../icons/crop.svg?v=db49ff882b6315d9773f71087cb28c325f663d930444b0254c7bbff6cd9bcf4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
