export const name="separator";
export const id="dl_02f009b66c204feea951";
export const url=new URL("../icons/separator.svg?v=b32b2cc3a64147c005c459e1782c8ef65d44f5074c9292f1de42914779e24e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
