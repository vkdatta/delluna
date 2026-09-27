export const name="code-fill";
export const id="dl_f2c5d301857c4d88b848";
export const url=new URL("../icons/code-fill.svg?v=bfa5152a821319e6b984c4cff1e82bb0454bd767b6e01e4d763ac6de15841b17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
