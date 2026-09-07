export const name="upload-simple-light";
export const id="dl_76af3cc33f8349cda1cf";
export const url=new URL("../icons/U/upload-simple-light.svg?v=5edf1473c405eed3d11252da3b8da4b89d56f57d3bef1dbf6a5861ed13c24012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
