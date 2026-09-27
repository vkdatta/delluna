export const name="lucid_1-brackets";
export const id="dl_45aa90302b8c4dc69bc6";
export const url=new URL("../icons/lucid_1-brackets.svg?v=43bd3ef492c3667b6da8719c45750fe89eeb5b3efbf059629963654157e37fe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
