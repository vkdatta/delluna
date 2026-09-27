export const name="interests";
export const id="dl_29c4135d03c8f583628b";
export const url=new URL("../icons/interests.svg?v=e5858321496d3b2c835fc22f0086223d2ee9c5e4658ac8c942c26e472a17f546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
