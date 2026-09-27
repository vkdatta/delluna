export const name="lucid_3-microscope";
export const id="dl_da3630069d3643cf9b07";
export const url=new URL("../icons/lucid_3-microscope.svg?v=fb4643afb70e72bbd1fc6bece54c88c5bca33781632bbbab52d35aea7db6f3ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
