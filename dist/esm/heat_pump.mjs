export const name="heat_pump";
export const id="dl_e721c0ac4a1a5149cde9";
export const url=new URL("../icons/heat_pump.svg?v=afd841d76b6f3d3b45abaa4ec6044abf6445a57088185d72f4f1ed1696899c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
