export const name="undo";
export const id="dl_d8491ad8a6db4d45edb9";
export const url=new URL("../icons/undo.svg?v=a2864a3dbfd4adfc7b26ee5c8e403359345e7e165df0d9c99e0a345a9f0901bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
