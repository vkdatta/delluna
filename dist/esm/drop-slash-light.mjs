export const name="drop-slash-light";
export const id="dl_34bc0f7f2d8f44558cba";
export const url=new URL("../icons/drop-slash-light.svg?v=a5837d47db628b78bea0bf9c5db2ef04213efb18ee0ae25620c9cd0e2ff3cf75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
