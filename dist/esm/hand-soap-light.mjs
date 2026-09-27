export const name="hand-soap-light";
export const id="dl_ba3cae7d4b4542f296cc";
export const url=new URL("../icons/hand-soap-light.svg?v=7853524a41c92326620c9e9ce11f832db960abe87801fcf7cf38fe393c8e3147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
