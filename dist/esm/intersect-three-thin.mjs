export const name="intersect-three-thin";
export const id="dl_16f0b7fb3ca04ebb9814";
export const url=new URL("../icons/intersect-three-thin.svg?v=0898c273c9fabb5cab2a3c59048b765ff388a7aeeb82eb57146cd81c22c84972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
