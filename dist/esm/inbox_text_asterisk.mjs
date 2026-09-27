export const name="inbox_text_asterisk";
export const id="dl_8ab1b7dc9e8b45a6a0ee";
export const url=new URL("../icons/inbox_text_asterisk.svg?v=e214e21721c38c1361df49c86e56a08eb03b1be82ac7cc6621ea2eaed0405e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
