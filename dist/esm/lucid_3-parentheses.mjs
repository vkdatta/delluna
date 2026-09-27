export const name="lucid_3-parentheses";
export const id="dl_3ddc25374b50446dac7c";
export const url=new URL("../icons/lucid_3-parentheses.svg?v=5bd3f0bb314301ad46ce666b5057c36a25a86c725b76c0184d5925f6eb6a5db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
