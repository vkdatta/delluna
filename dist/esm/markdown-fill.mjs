export const name="markdown-fill";
export const id="dl_0f2cf6ad1182086d25c2";
export const url=new URL("../icons/markdown-fill.svg?v=edad2c60a6ecfb29fde60c207912421bf5246317cbb855f59d81e14a892f6153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
