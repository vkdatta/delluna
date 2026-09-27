export const name="mobile_code";
export const id="dl_418bbe677dc8683459ed";
export const url=new URL("../icons/mobile_code.svg?v=1a04ef1a5cafce9655c585d711681ec1f5e07d8cf4045843c78f32a646b69889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
