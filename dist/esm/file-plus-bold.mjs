export const name="file-plus-bold";
export const id="dl_0923f0f8152f439d8a84";
export const url=new URL("../icons/file-plus-bold.svg?v=b3a1671b4902224309fc8afebab8650f1aba82ced540bd6b67bbd79d8debc26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
