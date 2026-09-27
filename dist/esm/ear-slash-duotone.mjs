export const name="ear-slash-duotone";
export const id="dl_a90a1b2523b04446a146";
export const url=new URL("../icons/ear-slash-duotone.svg?v=da030204fef26f7abed79a648fea7648f668400b0fcd688ef64d37980cbcb9cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
