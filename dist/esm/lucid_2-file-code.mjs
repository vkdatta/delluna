export const name="lucid_2-file-code";
export const id="dl_c8f6a673caac421e9aef";
export const url=new URL("../icons/lucid_2-file-code.svg?v=91f441e673c95b67a73e2079e799059a28dc61c981a93ec70e7625245077f976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
