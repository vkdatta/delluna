export const name="lucid_1-at-sign";
export const id="dl_0ab3d86b7d9b4603aea2";
export const url=new URL("../icons/lucid_1-at-sign.svg?v=9d35665208f939fd6d049a374ae8dcf750d4ec8f80509ad88c9dcd52aa20ebc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
