export const name="globe-x";
export const id="dl_b18112e73b1c4f868e5b";
export const url=new URL("../icons/globe-x.svg?v=adf3ab9e651c6f6adf803f68c01a9f9ca4358b0bb9ce2ca4b44598df35dde6f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
