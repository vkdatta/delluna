export const name="ladder-simple-thin";
export const id="dl_cbec387a2bca4bbc9f5c";
export const url=new URL("../icons/ladder-simple-thin.svg?v=54f99ec9008aea92b10dac2d38ee36e66ea3c53f1d532ea850bf1b936c74a572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
