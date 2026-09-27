export const name="lucid_3-medal";
export const id="dl_75912f7af3ef4f368fec";
export const url=new URL("../icons/lucid_3-medal.svg?v=d95f0bf0074c5177af1ae2636afc7f16f856d2b513999b291530551c3a0079d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
