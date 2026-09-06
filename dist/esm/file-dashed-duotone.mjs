export const name="file-dashed-duotone";
export const id="dl_8147ff17fd2a4bbc8d17";
export const url=new URL("../icons/file-dashed-duotone.svg?v=553d396163d625e556f8ffd4d6765cea3d5c5d17f4d0eb1abc4118eeaa6d787c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
