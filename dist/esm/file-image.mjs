export const name="file-image";
export const id="dl_5534752387284867ad19";
export const url=new URL("../icons/file-image.svg?v=acfc3e022c3384e2683ed429e2853380e20d0b371516524f031f55d65754fac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
