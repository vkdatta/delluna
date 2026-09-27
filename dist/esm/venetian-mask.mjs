export const name="venetian-mask";
export const id="dl_288ae75dbd534ef0a47b";
export const url=new URL("../icons/venetian-mask.svg?v=1070463223d7ac523fde7bf5b5c7a70b38bea196666a1114a9a98568dfd9a212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
