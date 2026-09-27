export const name="mark_as_unread-fill";
export const id="dl_b2a09d41e914b2b0aabf";
export const url=new URL("../icons/mark_as_unread-fill.svg?v=0d05a1a25d8d9368d8d9a9832af515960149918d9122a2735e8659ee96007f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
