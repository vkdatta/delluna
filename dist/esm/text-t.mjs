export const name="text-t";
export const id="dl_d1d48ea38a604dbabb6d";
export const url=new URL("../icons/T/text-t.svg?v=00f5cc0ddab2aacaf377ffe956e2ee5375ec3395043d468cbb5937251df7fc69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
