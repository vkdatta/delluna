export const name="arrows-in-cardinal-fill";
export const id="dl_3fafd6da0bdd49bdaa9e";
export const url=new URL("../icons/arrows-in-cardinal-fill.svg?v=51c76149c0badc60c9dbf20bebd10c1db1e6cb4f4a0c0e432383edf1da53cb69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
