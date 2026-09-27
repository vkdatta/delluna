export const name="20mp-fill";
export const id="dl_3ad123a4fe864d04eaa6";
export const url=new URL("../icons/20mp-fill.svg?v=3b69f1eee37386c3ad60a4258b538d6a1c9328c6fed89fc824a03f00a80cf642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
