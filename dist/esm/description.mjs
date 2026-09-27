export const name="description";
export const id="dl_1de08a07ee73f7b9a13c";
export const url=new URL("../icons/description.svg?v=1ce3ab90c76b4e9bd081a56a8534b76ca502571bd986cb2d2ca091209b0cd5db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
