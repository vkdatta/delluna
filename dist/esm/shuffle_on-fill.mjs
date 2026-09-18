export const name="shuffle_on-fill";
export const id="dl_16b01eec8a694a94a97a";
export const url=new URL("../icons/shuffle_on-fill.svg?v=9e4c42aa37f132860da99405e1b36f60f9e38df243dde47870838949d4eb9cba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
