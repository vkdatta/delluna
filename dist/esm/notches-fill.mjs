export const name="notches-fill";
export const id="dl_67c69f3c2f2244ba9a68";
export const url=new URL("../icons/notches-fill.svg?v=dfdd96bcfafe42b882b9b482067de3b8ff0abd3690f85ff71502ddeffe412bbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
