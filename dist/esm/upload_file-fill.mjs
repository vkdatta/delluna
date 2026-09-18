export const name="upload_file-fill";
export const id="dl_a28560c3ce334059a26d";
export const url=new URL("../icons/upload_file-fill.svg?v=c6e39fc7b64ea37a94d4aa22e8bf3e730e807206ddc5d1f5fb907d6afc016269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
