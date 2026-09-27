export const name="folder";
export const id="dl_18305818779e2027e38c";
export const url=new URL("../icons/folder.svg?v=cc7759b5ecfdc8a9a836abc8e472becb1e3ed1f93f9359a0926f7878764d1bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
