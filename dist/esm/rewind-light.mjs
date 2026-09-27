export const name="rewind-light";
export const id="dl_d1a0fde959c8441898e6";
export const url=new URL("../icons/rewind-light.svg?v=c2d62e6c6983563b25a5ccd6d2850c4c3c8e3aa0a11cf7fdfcfd77634271a890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
