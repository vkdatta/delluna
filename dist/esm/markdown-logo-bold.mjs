export const name="markdown-logo-bold";
export const id="dl_fb2ad3f6c60b43fda8b6";
export const url=new URL("../icons/markdown-logo-bold.svg?v=a666b56dd5329ea22257dc0c3dc472090d08011035526923967d37e98c1e58cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
