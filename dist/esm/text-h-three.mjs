export const name="text-h-three";
export const id="dl_5e2096821d964268b2d5";
export const url=new URL("../icons/T/text-h-three.svg?v=d666594a940a35e9f57deec0c73862d611fc85f8aa20dac697801f8be64736b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
