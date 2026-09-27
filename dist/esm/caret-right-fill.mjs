export const name="caret-right-fill";
export const id="dl_99bf66255fdb446da1ee";
export const url=new URL("../icons/caret-right-fill.svg?v=029996a91208360ca43116e4ee0ba216c1885e738c6c0b440124c9a0ca631f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
