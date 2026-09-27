export const name="hand_package-fill";
export const id="dl_42d5f32159f17b044a75";
export const url=new URL("../icons/hand_package-fill.svg?v=01fb6f10d457a1e733b20e27b1af0c618d4c100265e2eaf12fb6fbebdef553eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
