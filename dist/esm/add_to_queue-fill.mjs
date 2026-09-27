export const name="add_to_queue-fill";
export const id="dl_17ffb7b26dbb46063228";
export const url=new URL("../icons/add_to_queue-fill.svg?v=936fba4493f542b1d884244d144772b9cab9d3b6a9668653388f3bdea0ee7674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
