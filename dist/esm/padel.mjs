export const name="padel";
export const id="dl_554d9522c1c6429283f6";
export const url=new URL("../icons/padel.svg?v=d8aa4558a69faa5a0fbe2809e1132656031a5fad7a61f8b6ed2b0cbcd67f56f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
