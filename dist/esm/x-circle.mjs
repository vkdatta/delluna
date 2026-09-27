export const name="x-circle";
export const id="dl_c0dda7839018bac90890";
export const url=new URL("../icons/x-circle.svg?v=520d98244520ed08e9ee34969f0c1451701ed1d17f9a313af0ae5f188bd22618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
