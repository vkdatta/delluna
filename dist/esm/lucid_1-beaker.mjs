export const name="lucid_1-beaker";
export const id="dl_8e9cbfb3c2c344ecb8a8";
export const url=new URL("../icons/lucid_1-beaker.svg?v=66de3134d6e070c61ed38bc231aa3356f07db9b05214ba495fc1e78e7ec9511c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
