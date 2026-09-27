export const name="local_florist";
export const id="dl_664de8691e840e595185";
export const url=new URL("../icons/local_florist.svg?v=d5e35f2f66e608c9678a746f8db6314ac91a0d3fe9587677c745897f288a58a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
