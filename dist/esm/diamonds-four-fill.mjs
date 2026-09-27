export const name="diamonds-four-fill";
export const id="dl_140365f6f7c54c4b9df3";
export const url=new URL("../icons/diamonds-four-fill.svg?v=38705355f04e666831bed121a8739e1e17a470e8452efeedad72ccb2c9d5e039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
