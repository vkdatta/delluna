export const name="cell-signal-full-bold";
export const id="dl_f0d01c8b2b0943f789b5";
export const url=new URL("../icons/cell-signal-full-bold.svg?v=1a91f979e68323ce018ba7cbdec6a348b09fcdafc29e29cabe148f30e1d7c61b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
