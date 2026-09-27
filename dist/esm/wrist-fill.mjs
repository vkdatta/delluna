export const name="wrist-fill";
export const id="dl_3c80c66f4ca9a2501b73";
export const url=new URL("../icons/wrist-fill.svg?v=38b8a4244d31d8b1475d2fe31781bfe0d6094754bc38d4c7329f1a71d5a5680e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
