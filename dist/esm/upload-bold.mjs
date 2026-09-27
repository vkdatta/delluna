export const name="upload-bold";
export const id="dl_ca72639b42ecb6825583";
export const url=new URL("../icons/upload-bold.svg?v=2e46532f29e793ed69ef206d414bdda75881a646982a9de85e30f05622dfcf66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
