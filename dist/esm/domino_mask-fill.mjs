export const name="domino_mask-fill";
export const id="dl_cd98bad48f5095049f63";
export const url=new URL("../icons/domino_mask-fill.svg?v=ed4d05eb519a27f620299ba711dbcbf3b4a320177bba42e8cef1cc658092cb0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
