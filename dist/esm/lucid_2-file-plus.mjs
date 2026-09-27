export const name="lucid_2-file-plus";
export const id="dl_a1c74c6eb5a444738836";
export const url=new URL("../icons/lucid_2-file-plus.svg?v=a4e07d1aa1c2e847ad105fe9d50b27be68a26f38c0ea2f7bf87f73d7b9f670a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
