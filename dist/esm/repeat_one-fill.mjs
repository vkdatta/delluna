export const name="repeat_one-fill";
export const id="dl_bba865042d91e39bd5d4";
export const url=new URL("../icons/repeat_one-fill.svg?v=5eb81c5b7028cfaac05cca8b96cd48414d13f8b70108c6752af612a04ee5d7cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
