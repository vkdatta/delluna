export const name="tote-bold";
export const id="dl_ddb2e11b38e65d5566e0";
export const url=new URL("../icons/tote-bold.svg?v=d32d3dadcd7ca087e5ff082adac9f203cd9946d1ed25bba08b4b3a2f22c4293b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
