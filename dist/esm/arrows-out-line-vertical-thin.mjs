export const name="arrows-out-line-vertical-thin";
export const id="dl_36ecf8a520b64dd38a0a";
export const url=new URL("../icons/arrows-out-line-vertical-thin.svg?v=71c0ea2f89e684644af2217a9fe12bbc35b6dcef59efc4aed988eefb0015572b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
