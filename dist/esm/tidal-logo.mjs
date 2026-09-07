export const name="tidal-logo";
export const id="dl_ace1c958a5d74a768e0a";
export const url=new URL("../icons/T/tidal-logo.svg?v=3dee81b730fd3832470560aff2bc8a3ed1a60445260b48166d00143d9d5105dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
