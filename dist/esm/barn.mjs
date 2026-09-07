export const name="barn";
export const id="dl_e32ce97ba51641f69789";
export const url=new URL("../icons/barn.svg?v=9478f6e6226458fbd2a70283966a18ff8048babc56a22013a4a62c4e724ddec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
