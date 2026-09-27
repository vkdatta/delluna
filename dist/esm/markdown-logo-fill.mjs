export const name="markdown-logo-fill";
export const id="dl_67eef089bdc24128964e";
export const url=new URL("../icons/markdown-logo-fill.svg?v=0fa43c49ff1c77349736b80a7fc48ac94eb3759a27d11f6dc0145afe74812f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
