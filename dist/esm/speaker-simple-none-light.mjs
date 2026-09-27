export const name="speaker-simple-none-light";
export const id="dl_414716963790e1d8a285";
export const url=new URL("../icons/speaker-simple-none-light.svg?v=0446dfdf1de10dec8761cd6768dedd96414a9de1b77b022e8ac6ba11273750a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
