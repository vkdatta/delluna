export const name="1x_mobiledata_badge";
export const id="dl_bd6dfe3e1665df663b13";
export const url=new URL("../icons/1x_mobiledata_badge.svg?v=002e7fc1c830d943d15d01f3b4c5a47d492ea46e36d4abbda485773029677269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
