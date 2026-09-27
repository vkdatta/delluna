export const name="lucid_2-file-minus-corner";
export const id="dl_630c8f7417484459b47e";
export const url=new URL("../icons/lucid_2-file-minus-corner.svg?v=4d3ce3b236ae1b6e48390e791dd5b9805908c0f90058b476c61545ed80ce01e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
