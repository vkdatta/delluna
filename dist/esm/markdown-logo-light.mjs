export const name="markdown-logo-light";
export const id="dl_d76692edf5af4eb8812c";
export const url=new URL("../icons/markdown-logo-light.svg?v=0d169e3cfebc2ba722a7f6b40aaff729bec50a43afec9a08bfcf269cde8644c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
