export const name="lucid_3-mouse-pointer-2";
export const id="dl_91e99d22e91c44979d04";
export const url=new URL("../icons/lucid_3-mouse-pointer-2.svg?v=c8aa954da61971637bc07d00c0992b4cdcee747d9eaf36fcfa70e3043ab0849d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
