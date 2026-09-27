export const name="lucid_3-message-circle-code";
export const id="dl_82febc8be8cb4b80bc3a";
export const url=new URL("../icons/lucid_3-message-circle-code.svg?v=becd3d1e3287fd08d354f7b12dc2daaa920a24b09f0009894103ca63dfea03c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
