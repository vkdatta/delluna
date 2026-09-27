export const name="caret-left-bold";
export const id="dl_161adcc8f5024cfb9d95";
export const url=new URL("../icons/caret-left-bold.svg?v=674eb8aae3cd8f3dad92ec8fa5a775450b11fda81a5a61971e781ae71228cf35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
