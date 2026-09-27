export const name="cloud-moon-thin";
export const id="dl_2cf8494d495a4936b74d";
export const url=new URL("../icons/cloud-moon-thin.svg?v=015573d1973ab918a61af949a54ef6e12aec8b1e8195e9a273330ff15aca0c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
