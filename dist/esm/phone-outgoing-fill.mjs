export const name="phone-outgoing-fill";
export const id="dl_c173ceb9a0884cf18c10";
export const url=new URL("../icons/phone-outgoing-fill.svg?v=a06b9444ce970f335926f6b122d5ac508fcbbd07b71701eb6fbb7a9e2b3eee40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
