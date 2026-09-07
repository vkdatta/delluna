export const name="funnel-simple-fill";
export const id="dl_e5d7d85c60db4bf3be80";
export const url=new URL("../icons/funnel-simple-fill.svg?v=c09610450271deb22523ca237e2e4cd610481c2347751f2034e33e24b45a7c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
