export const name="ink_highlighter_off-fill";
export const id="dl_84e2b89a8925abec0c6c";
export const url=new URL("../icons/ink_highlighter_off-fill.svg?v=c31f2d11eee412d5a180eda78ee357cc4107b2ed84af36f198a1d7eb690838aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
