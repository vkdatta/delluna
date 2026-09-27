export const name="lucid_3-refresh-cw-off";
export const id="dl_bb9fbb1d572044d7ad33";
export const url=new URL("../icons/lucid_3-refresh-cw-off.svg?v=bf91b3e189106c7bc678b9975a2d6db0322026d50a079dd5ecd4c9760d2e44e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
