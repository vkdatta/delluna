export const name="subway";
export const id="dl_f5cefeb7e197c35df604";
export const url=new URL("../icons/subway.svg?v=a80394d36f4681b272d9531a075a798bb64c0bdd6fe4abfc9568887a7cdd3f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
