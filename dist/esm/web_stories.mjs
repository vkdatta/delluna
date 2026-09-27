export const name="web_stories";
export const id="dl_d4a01687c6d6d96d10e4";
export const url=new URL("../icons/web_stories.svg?v=c950501c62c477a0d3608b37de8f4a3eb3936fc9c316f5fb72f79cb1833243d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
