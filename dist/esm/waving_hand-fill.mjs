export const name="waving_hand-fill";
export const id="dl_14b924a57a3904d594ec";
export const url=new URL("../icons/waving_hand-fill.svg?v=bd28b8b4bfa38f436d23ac5663b3bfd68f7fd48950e95cd524ef39fd34e69f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
