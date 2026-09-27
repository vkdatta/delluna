export const name="step_into-fill";
export const id="dl_f14da8c959bd2851438d";
export const url=new URL("../icons/step_into-fill.svg?v=fcb2db63c77e0b9143d8c12ddb9bb7616db68cdcc7f4fb05a01ca90c8f0b5e88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
