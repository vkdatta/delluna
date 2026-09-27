export const name="speaker-simple-none";
export const id="dl_59c6abd6f31adc43efb6";
export const url=new URL("../icons/speaker-simple-none.svg?v=f2644b6831ea5ae6785180bb0cb1bd331e3b5710fd01f0cb0e9c408b3e1aba01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
