export const name="face-mask-thin";
export const id="dl_e9bd931912f644c49883";
export const url=new URL("../icons/face-mask-thin.svg?v=23d2355fa33ef9a14c78d8a3cade08bda52e949db4ae2ea9e49ebbfe45837a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
