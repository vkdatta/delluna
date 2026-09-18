export const name="image_arrow_up";
export const id="dl_cc8e92c3d09642849ac7";
export const url=new URL("../icons/I/image_arrow_up.svg?v=c4a73e39ae6601d7ab650be449d32e8d3f07e2d37a790f5ad6890b4e1244b73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
