export const name="file-archive-light";
export const id="dl_e1f0c2eef1a54eefbcf0";
export const url=new URL("../icons/file-archive-light.svg?v=c35995ff81118d67630511ed06ef9efb055e1985d521816305fc7bde38c0d134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
