export const name="lucid_2-corner-up-left";
export const id="dl_7f8b48209cd9467b9b78";
export const url=new URL("../icons/lucid_2-corner-up-left.svg?v=c8df8aecd42285b6f057e657ff1f3d9d2479d81e9d4e1c4fd3ff8f2f2ec6d5c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
