export const name="browsers-thin";
export const id="dl_75e45b2706fd4720900b";
export const url=new URL("../icons/browsers-thin.svg?v=7ffdcb68e6e0250ee9e1afcc7052178e73ee53e4a8a6e298d0aa1202f4de3217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
