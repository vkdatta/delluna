export const name="arrow-line-down-light";
export const id="dl_93ce2fd069d14e69b8c0";
export const url=new URL("../icons/arrow-line-down-light.svg?v=5fb3f84f5d62221805ee0dfd08526e26f2faeae1f8e2f5544e01531245d6bd09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
