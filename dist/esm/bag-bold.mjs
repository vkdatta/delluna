export const name="bag-bold";
export const id="dl_e3c0b9aef9cf404bb237";
export const url=new URL("../icons/bag-bold.svg?v=5efffa6de77d86739c95a6d15bc9ec5d3df160a43909db6f404253934e95efac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
