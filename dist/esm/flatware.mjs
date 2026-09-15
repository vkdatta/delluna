export const name="flatware";
export const id="dl_b53491c7285a46e49465";
export const url=new URL("../icons/F/flatware.svg?v=9a3cb650e48631ddcaf00af4fe0ae948ab56c8743f03a9b96b0a86894bb15635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
