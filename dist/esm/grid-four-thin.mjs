export const name="grid-four-thin";
export const id="dl_bfb19396f4fc44fc805c";
export const url=new URL("../icons/grid-four-thin.svg?v=7df6e811c8ae38ef63f3aa1a2ff15d63bd0b5fb0e101389f7cd3787d0db36404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
