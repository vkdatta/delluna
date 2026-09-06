export const name="lucid_3-package";
export const id="dl_7c9a0625c7764692a50a";
export const url=new URL("../icons/lucid_3-package.svg?v=65ce6ddddb46f7bb96e53b6b8f8afde6ff9fbf967d20f511e79d43c47a08b6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
