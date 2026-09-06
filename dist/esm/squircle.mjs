export const name="squircle";
export const id="dl_ff515c6eb5714c5abbd9";
export const url=new URL("../icons/squircle.svg?v=7ceace4db185761c3575ef4021fa1cfb0cfa418ef0a1f43759556f71bb11f470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
