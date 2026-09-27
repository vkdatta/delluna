export const name="markdown-logo-bold";
export const id="dl_fb2ad3f6c60b43fda8b6";
export const url=new URL("../icons/markdown-logo-bold.svg?v=75c2fe949f67dcda69ccd66e4f3f0a901daf2d9d6a7a14e2b420db8b94aad445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
