export const name="file_open";
export const id="dl_2d622bba156fdf870029";
export const url=new URL("../icons/file_open.svg?v=4d669f85cd77ed9211c589e23e62c0a932e415465b96ef34383b657e92ccf98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
