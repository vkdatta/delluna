export const name="gender-transgender-thin";
export const id="dl_263364ad2f58466ca9de";
export const url=new URL("../icons/gender-transgender-thin.svg?v=9e9af63113cbcadf48325747f9dd97d0455c55fbd85a51af6537538b1d7ef1f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
