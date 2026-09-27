export const name="lucid_3-shield-off";
export const id="dl_0f3581031fc44538b002";
export const url=new URL("../icons/lucid_3-shield-off.svg?v=7007f0a718c0390b586d1a230d386c24b7756c137af4f3d168f0f6277dcf8c21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
