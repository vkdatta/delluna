export const name="article-thin";
export const id="dl_46ab3b8c966b46bfaae0";
export const url=new URL("../icons/article-thin.svg?v=2124a3a43909061f61b879a8ed49379e4aff986de48bf7833a0890fa265d2bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
