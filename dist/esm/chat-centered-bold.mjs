export const name="chat-centered-bold";
export const id="dl_ccc44ab5f2174cad8eb8";
export const url=new URL("../icons/chat-centered-bold.svg?v=26e860e906ce05dcc8589e7e6696984b55f338a0a68779478102c02aca317901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
