export const name="info-light";
export const id="dl_10b85caa0b3647088b62";
export const url=new URL("../icons/info-light.svg?v=5a0c69682ee6645cd4aad21d807a925abe44ac20f26480fbe81b6f22c5b9f0ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
