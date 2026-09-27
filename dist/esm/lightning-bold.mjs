export const name="lightning-bold";
export const id="dl_074a2928b148497d8351";
export const url=new URL("../icons/lightning-bold.svg?v=2b526e430ead6b136c2b954e5ae3bd5ba186af301145cdfbd6f7994c9fa7d395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
