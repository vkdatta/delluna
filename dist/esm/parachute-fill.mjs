export const name="parachute-fill";
export const id="dl_7f2dfc8098ab494eba03";
export const url=new URL("../icons/parachute-fill.svg?v=35da76cf694582367ef2e1eadb62147b5f1b56c6e5c86bad2b83455ae5789beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
