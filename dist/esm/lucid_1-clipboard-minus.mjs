export const name="lucid_1-clipboard-minus";
export const id="dl_070dfe107d71405a80f1";
export const url=new URL("../icons/lucid_1-clipboard-minus.svg?v=d5b2040a22c5b9a8a00dd1eaf6c82b25d792a497e8a4957264dbb69075ed4e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
