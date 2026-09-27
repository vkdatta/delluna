export const name="8mp-fill";
export const id="dl_9868060d007a1cf51357";
export const url=new URL("../icons/8mp-fill.svg?v=e4360345e4b8bc8f690f15439f111e98b7b976888a386dd42fa023a644be5e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
