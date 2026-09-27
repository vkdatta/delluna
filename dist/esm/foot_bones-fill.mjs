export const name="foot_bones-fill";
export const id="dl_9ef27ed9109c92d3ee03";
export const url=new URL("../icons/foot_bones-fill.svg?v=8449528d140cda55c76eb1c6e66f7273970cde67e91c8e9f82b1ee8bd94fcc2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
