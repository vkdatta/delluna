export const name="sauna-fill";
export const id="dl_206ffb7880fe3edb6e65";
export const url=new URL("../icons/sauna-fill.svg?v=a1676d62d45702557f1c361f233fc103d6c9cf01afae787e630c9f47f2fcb460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
