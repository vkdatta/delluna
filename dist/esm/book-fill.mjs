export const name="book-fill";
export const id="dl_871e584a57db44398450";
export const url=new URL("../icons/book-fill.svg?v=17f3b3df8dfa14c7d60373aec78c1466a7b1f01ae6c80b29fe2a74e2eb71a497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
