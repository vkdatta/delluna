export const name="lucid_2-headphones";
export const id="dl_30782f176d514024a4b9";
export const url=new URL("../icons/lucid_2-headphones.svg?v=28ef4da821dc99b777e4181463e72fd74380238d9cbf16041698f06cc3348efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
