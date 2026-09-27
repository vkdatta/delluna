export const name="lucid_1-banknote-arrow-down";
export const id="dl_fa7f233783934a48863e";
export const url=new URL("../icons/lucid_1-banknote-arrow-down.svg?v=3d33a8896f5f9fd4c2670bc0d727f459bddbb38bfb2e9e0dfc579478b22a76f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
