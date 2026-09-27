export const name="file-archive-duotone";
export const id="dl_474853a4b11c4d6286b1";
export const url=new URL("../icons/file-archive-duotone.svg?v=d61f8d654531da385fcd45981aa587ddad08cebf7d3c4ef2ee522788e371e07f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
