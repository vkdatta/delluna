export const name="text-h-three-light";
export const id="dl_04bc5a856994f52538ce";
export const url=new URL("../icons/text-h-three-light.svg?v=2b1391642887f7866ee57aecc195e99a5a2f1b4a26478becaf3cfe9d66418421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
