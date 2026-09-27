export const name="arrow-circle-left-thin";
export const id="dl_435475120c034368a871";
export const url=new URL("../icons/arrow-circle-left-thin.svg?v=4787282acf82bda6f0f1d4dc6386e2ea8ecc3a0993fb51ec43e6f9ad954625cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
