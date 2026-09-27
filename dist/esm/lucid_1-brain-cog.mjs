export const name="lucid_1-brain-cog";
export const id="dl_43f9fa71573e4461837a";
export const url=new URL("../icons/lucid_1-brain-cog.svg?v=b8f146ebd4ea18322bc0cd4c41be068ee30aa32c1e443f395bff7252e80ce84d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
