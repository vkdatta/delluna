export const name="tree-evergreen";
export const id="dl_467a088cdf7cdaae3092";
export const url=new URL("../icons/tree-evergreen.svg?v=84852a97a260b38a44fc291d8d7da00d4a3783ec992fc5ee2927d832ee88bed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
