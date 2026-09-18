export const name="contactless-fill";
export const id="dl_393c42ca2a774f72bdf1";
export const url=new URL("../icons/contactless-fill.svg?v=1295d161eafbb23e8ef707ebb8c6947a218a7a429843db5694cdd5b228a5ff5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
