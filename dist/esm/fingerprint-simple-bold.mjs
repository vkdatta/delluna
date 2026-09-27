export const name="fingerprint-simple-bold";
export const id="dl_6fe774449f934dcfba1c";
export const url=new URL("../icons/fingerprint-simple-bold.svg?v=2c97017655b69b21ad7088052ee16e3798c5d176b3cd7842a0d6e3dde7df6f60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
