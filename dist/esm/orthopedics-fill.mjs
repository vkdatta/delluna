export const name="orthopedics-fill";
export const id="dl_2a9c12f347ccd872c527";
export const url=new URL("../icons/orthopedics-fill.svg?v=aab6f664a52af6f9f4d63d824b51a79141ce8fe487c62d3a38c539abc38a681b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
