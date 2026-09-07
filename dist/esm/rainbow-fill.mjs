export const name="rainbow-fill";
export const id="dl_f45ddd9e11344897b5d9";
export const url=new URL("../icons/rainbow-fill.svg?v=078d129f629819640e673591eb2480df6f021c2944274d5685c9d6617b57d5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
