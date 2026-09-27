export const name="number-circle-five";
export const id="dl_cce035ce9a5a4647bbe1";
export const url=new URL("../icons/number-circle-five.svg?v=b96efc8a767a6abe0a235c485a097d61f553ecba48149a4a62539181699d9153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
