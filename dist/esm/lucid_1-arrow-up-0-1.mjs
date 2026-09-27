export const name="lucid_1-arrow-up-0-1";
export const id="dl_3c444ea7d8d64a7f86e7";
export const url=new URL("../icons/lucid_1-arrow-up-0-1.svg?v=621e0718e0cec0873fdacffb8c82964663511d6a1de29f8acc5784befdf1876a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
