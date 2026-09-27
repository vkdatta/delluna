export const name="tram-fill";
export const id="dl_4d304aa3173b82f1efa8";
export const url=new URL("../icons/tram-fill.svg?v=c21b282042d1c878541d5aad78385f177c5fbe58191e0c243c78dfa33db2480b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
