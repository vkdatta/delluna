export const name="eye-slash";
export const id="dl_1e40fa0e6eb3458ca58f";
export const url=new URL("../icons/eye-slash.svg?v=cff64af2d0cf75b5c54eb5c421051751c37832c7c112633dd6c3868859f6cccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
