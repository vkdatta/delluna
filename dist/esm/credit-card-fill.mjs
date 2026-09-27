export const name="credit-card-fill";
export const id="dl_fc0e340ac73a4eb4b4de";
export const url=new URL("../icons/credit-card-fill.svg?v=02fb9fcc32188dca2fe923944654202dbe5ab4128691bf9fdb63157671daedbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
