export const name="video_call-fill";
export const id="dl_82250c9ec8a6cad2b59c";
export const url=new URL("../icons/video_call-fill.svg?v=f62c86303eca32dfd493b2f248acfd091118f1b5ecac8f1d98249df886d05372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
