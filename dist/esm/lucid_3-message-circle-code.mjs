export const name="lucid_3-message-circle-code";
export const id="dl_82febc8be8cb4b80bc3a";
export const url=new URL("../icons/lucid_3-message-circle-code.svg?v=f266836634a64a1c9904e2e8f7cf86989284efa29f802763508c92bd41a02cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
