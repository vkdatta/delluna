export const name="fingerprint-simple-bold";
export const id="dl_6fe774449f934dcfba1c";
export const url=new URL("../icons/fingerprint-simple-bold.svg?v=47f4ba2bdb920a651b641065c64c0a4a825e9ef7e4f96f0726f25d3e50969122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
