export const name="label_important-fill";
export const id="dl_d2e29424ba65f3e66ed2";
export const url=new URL("../icons/label_important-fill.svg?v=881ba8c4cae40f0098c85903dfab243a22d923e2fc3025a1c37fabf7797b0b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
