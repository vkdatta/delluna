export const name="apk_install-fill";
export const id="dl_f2d8a0c6e3ed78e09100";
export const url=new URL("../icons/apk_install-fill.svg?v=2814eacffe7813feb1d3079eac8c3d385acf6a97fd6cca0728c188c810963a59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
