export const name="siren-fill";
export const id="dl_d91b5ab57f2b76ed92f9";
export const url=new URL("../icons/siren-fill.svg?v=2a29e5c20f4cbd902da02d1173895b3c0121ef8220831cb12d8227f394399f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
