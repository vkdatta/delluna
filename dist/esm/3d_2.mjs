export const name="3d_2";
export const id="dl_21cce0cad4f826b7a7d5";
export const url=new URL("../icons/3d_2.svg?v=50697babde3c74f0212a0d1b7f5a3a5398fd1fdb0a309daea8fd065fd0e9bbf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
