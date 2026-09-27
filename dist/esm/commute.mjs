export const name="commute";
export const id="dl_6d9b0282a1374e8010b0";
export const url=new URL("../icons/commute.svg?v=677aeaf4e7978af3974adc3c9b4d8a2d2a98b504b253a948ee6223363ae509d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
