export const name="arrows-in-line-vertical";
export const id="dl_16fad510bfe043be8d41";
export const url=new URL("../icons/arrows-in-line-vertical.svg?v=0a5b69b97fde2250f1e2ac9782b89ed89f0af290829955cda465b6e407892827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
