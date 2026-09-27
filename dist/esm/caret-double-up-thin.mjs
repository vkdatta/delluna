export const name="caret-double-up-thin";
export const id="dl_b67ad56b64d146eaa7d8";
export const url=new URL("../icons/caret-double-up-thin.svg?v=dcb95db37152ef36bf459080c922a6221a5d3c3021ce0fcb6dbb84aa4794d188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
