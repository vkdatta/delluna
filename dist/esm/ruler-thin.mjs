export const name="ruler-thin";
export const id="dl_af74c520bc25402fa932";
export const url=new URL("../icons/ruler-thin.svg?v=1e896067283476aa0fc4ab3246076d8c84e9d602f0dfda9de17cec2d4e05bd86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
