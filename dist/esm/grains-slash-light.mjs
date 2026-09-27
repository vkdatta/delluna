export const name="grains-slash-light";
export const id="dl_aeacc8f5892a4d84baec";
export const url=new URL("../icons/grains-slash-light.svg?v=8f367014e27ff136888eb659aadcf477fe80d37d58b8c9e2c6dc5f82a262740b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
