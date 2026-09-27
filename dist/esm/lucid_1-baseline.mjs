export const name="lucid_1-baseline";
export const id="dl_d7fd9960a6fc4e4db347";
export const url=new URL("../icons/lucid_1-baseline.svg?v=56f1ee8fa0c68bdf56c1ca4e90372d52242faf9eeaa556b1307ba44f3f44d5e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
