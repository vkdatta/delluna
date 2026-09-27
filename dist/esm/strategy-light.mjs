export const name="strategy-light";
export const id="dl_a1ef67cf7061179cd9db";
export const url=new URL("../icons/strategy-light.svg?v=7bf40afa9cf6bb85a626898bc9967073293629edc5a5fb531ac0c8a36386c47c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
