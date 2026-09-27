export const name="drafts-fill";
export const id="dl_f69d19fcebe40e1cf421";
export const url=new URL("../icons/drafts-fill.svg?v=2cc821787353046259258989cc3d7c53a307c6abc5e33a28b9540607d729471a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
