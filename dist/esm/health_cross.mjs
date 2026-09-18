export const name="health_cross";
export const id="dl_90a2e92d54324f25a8a0";
export const url=new URL("../icons/H/health_cross.svg?v=0cce7cf6e9e98fa968603dfe098e911aa0dd8fdeae6d076e192ae0579a2e2f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
