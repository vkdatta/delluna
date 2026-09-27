export const name="real_estate_agent-fill";
export const id="dl_2a42e808a1c38d065b2f";
export const url=new URL("../icons/real_estate_agent-fill.svg?v=70f391c46aad2395803caf6acb767cb54ce45636ec990d132bc0fb86295a2e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
