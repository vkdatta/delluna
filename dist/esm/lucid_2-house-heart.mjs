export const name="lucid_2-house-heart";
export const id="dl_a2a2a09a08704402a314";
export const url=new URL("../icons/lucid_2-house-heart.svg?v=1d753343c0c0828bf2ab064bfae79c38540f7b6b947b5f94d5f23212fc316f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
