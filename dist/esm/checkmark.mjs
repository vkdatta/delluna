export const name="checkmark";
export const id="dl_58fc6c6752e04eb7a0b5";
export const url=new URL("../icons/checkmark.svg?v=809977d1308f9c50474a4286340e0a30892dd2b48c278e782fdccf91cfc8caca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
