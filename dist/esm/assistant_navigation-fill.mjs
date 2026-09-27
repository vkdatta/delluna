export const name="assistant_navigation-fill";
export const id="dl_99b254f6d4be74e6a42f";
export const url=new URL("../icons/assistant_navigation-fill.svg?v=96e33bc8380800c34cb3f7bb2558ee0480f950a9e83920e1704736f6d55a320c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
