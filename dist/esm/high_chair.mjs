export const name="high_chair";
export const id="dl_f1ab9e40aba141b28a61";
export const url=new URL("../icons/H/high_chair.svg?v=833bfbed5cf9ac2c5085faf34e052c2839174ab95562741c26982beab05315cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
