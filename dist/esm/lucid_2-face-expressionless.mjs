export const name="lucid_2-face-expressionless";
export const id="dl_13772af748a944cba8b4";
export const url=new URL("../icons/lucid_2-face-expressionless.svg?v=d1d4f31446cdfd9e892f4b06000f2a638f0bc7954ae7180ca7ca289a07c8d53f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
