export const name="file-plus-light";
export const id="dl_e42952988b7e4abcb626";
export const url=new URL("../icons/file-plus-light.svg?v=c2ef343715894a07442ebfe631fcde98c0f9c89c3acf2564742340759053f049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
