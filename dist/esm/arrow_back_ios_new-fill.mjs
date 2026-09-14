export const name="arrow_back_ios_new-fill";
export const id="dl_e183a28d3a164beda31f";
export const url=new URL("../icons/A/arrow_back_ios_new-fill.svg?v=6ad7c7bbd2d1fa7384e4ac79d482e45e71cbdc620c23fa229e3aa8b9ab494cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
