export const name="accessible-fill";
export const id="dl_ae1a45a9a24344fb91ec";
export const url=new URL("../icons/A/accessible-fill.svg?v=0caed778660b5718fd36655a5b20ba631e49b5731bcbec9d77b602f503dc8440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
