export const name="suitcase-rolling-fill";
export const id="dl_41dc4c705cc2312ef3f6";
export const url=new URL("../icons/suitcase-rolling-fill.svg?v=935d460182a29f96e55d86c9d99374a40b3eb1c3e6c5a00b1f262f2738f4b498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
