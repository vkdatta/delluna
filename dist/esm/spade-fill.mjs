export const name="spade-fill";
export const id="dl_89321e0d93fcd48ac365";
export const url=new URL("../icons/spade-fill.svg?v=5f4752d6a4fadb118e19f5a59308ce93f28a28ab573c84eea52288fc80993714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
