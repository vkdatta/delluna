export const name="lucid_1-anvil";
export const id="dl_659a6fbcf8894cd8a7c8";
export const url=new URL("../icons/lucid_1-anvil.svg?v=0be1e06975e60291516e41098db211c8892ec5d2037690e3f03af9f7b10161b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
