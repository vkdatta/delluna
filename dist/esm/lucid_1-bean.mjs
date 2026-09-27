export const name="lucid_1-bean";
export const id="dl_b2c39b2de41d476cb28c";
export const url=new URL("../icons/lucid_1-bean.svg?v=1a7184e8a8a0fe96ba47e2942d750f9626f6aed03b7f60856bf497f8598f6a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
