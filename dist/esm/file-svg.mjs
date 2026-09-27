export const name="file-svg";
export const id="dl_e28f9146b1a54bbf95cf";
export const url=new URL("../icons/file-svg.svg?v=0b1691f7c31c3ff59490900d14e2c9bd71962d4ba9a587312dfb0bf3e752869a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
