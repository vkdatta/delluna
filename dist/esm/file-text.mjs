export const name="file-text";
export const id="dl_4035574327304ac2874e";
export const url=new URL("../icons/file-text.svg?v=205db3d3836fdaf8dca91f3d69c7be542374c645741a7cfe784bb92b1f10c0d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
