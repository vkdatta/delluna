export const name="trending_flat-fill";
export const id="dl_e4ef4fbfbeee4149943c";
export const url=new URL("../icons/T/trending_flat-fill.svg?v=bf1299b8d16d97d46bbb9a196dd0b69ce2365de95b4d2841a76a0593e55341e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
