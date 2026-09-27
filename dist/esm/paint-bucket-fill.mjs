export const name="paint-bucket-fill";
export const id="dl_47839f8644084aa3b382";
export const url=new URL("../icons/paint-bucket-fill.svg?v=2036993821a16e2cee5ab5204bc2a7e41c10e3887a27858c122240e52a94f245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
