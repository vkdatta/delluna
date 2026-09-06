export const name="dot-outline";
export const id="dl_a2f22a9e6f6c45ffbaee";
export const url=new URL("../icons/dot-outline.svg?v=1c99dafbc881699a083da5367f3e5cd73bc6783a83d5fae3b6611458c76c2253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
