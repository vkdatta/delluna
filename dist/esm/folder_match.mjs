export const name="folder_match";
export const id="dl_85e0f3f475b441013edc";
export const url=new URL("../icons/folder_match.svg?v=afea43961622da06572f9ab6d282d62ff69b4895ef13b0237aa7cbc0fbb4a996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
