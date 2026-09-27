export const name="lucid_1-cake";
export const id="dl_4953a25b994a44828324";
export const url=new URL("../icons/lucid_1-cake.svg?v=9a7246b59fecdd77271bfe33d78a0ef5b5eac6b2a37ad255f700841c38f448a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
