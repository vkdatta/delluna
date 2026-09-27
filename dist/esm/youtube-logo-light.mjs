export const name="youtube-logo-light";
export const id="dl_8718008a136ac44b4ec8";
export const url=new URL("../icons/youtube-logo-light.svg?v=024ac720df9430c0c0df273fd2b35836a1206d60a741fdc5b21c1e8f3ebed2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
