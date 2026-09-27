export const name="lucid_1-anvil";
export const id="dl_659a6fbcf8894cd8a7c8";
export const url=new URL("../icons/lucid_1-anvil.svg?v=b785e31ac2a258999cfeb3ab9e40dcb52a73e3bc9aaf96644c1af95c282a1c28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
