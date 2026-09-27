export const name="lan";
export const id="dl_296fa0d4ba301d2cb595";
export const url=new URL("../icons/lan.svg?v=01f53815360b32c55d9bb7bab6eda12888c918a97e4d2700cbad7566acaec7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
