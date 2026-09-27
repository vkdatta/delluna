export const name="volunteer_activism";
export const id="dl_332a722112b6435a93f0";
export const url=new URL("../icons/volunteer_activism.svg?v=f3841b259e687b1813c812d21106cb2d10ad404a42418ba11218cabd099ccc47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
