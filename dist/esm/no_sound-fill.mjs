export const name="no_sound-fill";
export const id="dl_c8440e41ed8ca1b91448";
export const url=new URL("../icons/no_sound-fill.svg?v=d06e1f1b143ffa813fff883b4811732adc274c89729dcac418bf57685a474172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
