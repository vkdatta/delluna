export const name="phone-pause";
export const id="dl_e896320415fe4f36ab7a";
export const url=new URL("../icons/phone-pause.svg?v=b893b55625b9a4c8895a8f9929fb7bd7400b8c060569b3bb9a34141be7f1a3eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
