export const name="child_friendly";
export const id="dl_e8b04b55eb167dd15069";
export const url=new URL("../icons/child_friendly.svg?v=64314c8d51c23fdd4b0d8a6a5643bdce441cdc8ef961036f162ee3ae0d183fe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
