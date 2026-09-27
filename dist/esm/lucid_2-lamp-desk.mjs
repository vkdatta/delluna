export const name="lucid_2-lamp-desk";
export const id="dl_e7437dda9aa64b809b1d";
export const url=new URL("../icons/lucid_2-lamp-desk.svg?v=64120d8776ebe01c0178d29b34a02d7223e7d423fd6a1e8d29bf08cbb3814a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
