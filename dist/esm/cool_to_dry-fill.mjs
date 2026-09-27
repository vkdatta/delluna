export const name="cool_to_dry-fill";
export const id="dl_36ff4d1dd789a963846a";
export const url=new URL("../icons/cool_to_dry-fill.svg?v=a3f7aecf3fe51b0b2859f0e68ad44bfc102269bc196e86b831406c0bf3a6735c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
