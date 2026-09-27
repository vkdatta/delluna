export const name="lucid_2-file-check-corner";
export const id="dl_9203d4843f2f404e86a7";
export const url=new URL("../icons/lucid_2-file-check-corner.svg?v=27c5d201b4903553b8d5590243f1a86195cdf233f659e1a0c8e1807f0a9bd778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
