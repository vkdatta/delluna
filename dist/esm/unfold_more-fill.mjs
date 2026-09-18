export const name="unfold_more-fill";
export const id="dl_a979b09d48224268958e";
export const url=new URL("../icons/unfold_more-fill.svg?v=a4d5cec55549189d7c74c02aa98a7cc36bc6ce3d0a20af0954d0949ba425f65c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
