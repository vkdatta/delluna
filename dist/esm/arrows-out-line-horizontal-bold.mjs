export const name="arrows-out-line-horizontal-bold";
export const id="dl_8f98f9326af24673824b";
export const url=new URL("../icons/arrows-out-line-horizontal-bold.svg?v=588ec05a9015f5b4134431c9e2861a017f25b02ac7c666b79e64ff880462433e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
