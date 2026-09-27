export const name="scales-bold";
export const id="dl_f85fb1d7e7f735ba5c8e";
export const url=new URL("../icons/scales-bold.svg?v=1ec5dc3aa40626210797bdb8cece5b26a1b126957c5100baa9722de315d73071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
