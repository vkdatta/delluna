export const name="dot-fill";
export const id="dl_dd1908bd45d448f2bce6";
export const url=new URL("../icons/dot-fill.svg?v=12ede8b6dbd584dabeaf16234c213980bf440e04ad4d09fdd008a8d7b181c251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
