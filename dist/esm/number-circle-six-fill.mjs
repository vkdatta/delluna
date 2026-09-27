export const name="number-circle-six-fill";
export const id="dl_ece58bdc7ab84d728f22";
export const url=new URL("../icons/number-circle-six-fill.svg?v=58a35d89ef69336e54ac523517414b8beae8e4641a821f56db4a1f041c6d3233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
