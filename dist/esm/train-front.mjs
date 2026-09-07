export const name="train-front";
export const id="dl_c80a97aaa8d14433953c";
export const url=new URL("../icons/train-front.svg?v=cbe09a55a431de61d73df67eb99da1bf95f5ab24232d44886b7db452a78beff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
