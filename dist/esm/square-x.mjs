export const name="square-x";
export const id="dl_548abb2ab44445979260";
export const url=new URL("../icons/square-x.svg?v=9cba2d4d6a89e3aad7de97fdd34d3c5ba570eb189cae6bd5cec0542a69489521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
