export const name="self_improvement";
export const id="dl_8a018c9a3e0716f1f728";
export const url=new URL("../icons/self_improvement.svg?v=a8e27665a1ecb1dcdb482e4d77ab00c1119450fde39434e6cc0ff2350075bacd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
