export const name="lucid_2-drumstick";
export const id="dl_12bb75998b424731b03f";
export const url=new URL("../icons/lucid_2-drumstick.svg?v=f98a12ea66a80c839eddc5317086d5ade7b688c629a91ee5012b001fbfc6e363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
