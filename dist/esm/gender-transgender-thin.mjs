export const name="gender-transgender-thin";
export const id="dl_263364ad2f58466ca9de";
export const url=new URL("../icons/gender-transgender-thin.svg?v=72ca94d4e9f89049c061086dceb5accdf9a44a9506c8ffe804bf39c3ed4504c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
