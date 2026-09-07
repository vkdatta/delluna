export const name="bezier-curve";
export const id="dl_f9767301df374f659715";
export const url=new URL("../icons/bezier-curve.svg?v=5ffb4c2ea00f0a68d631173f17b9f353d2fe0f44ed213ac7c943d6b10e6dc364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
