export const name="file-arrow-up-light";
export const id="dl_b599e594b42940b884c8";
export const url=new URL("../icons/file-arrow-up-light.svg?v=053b4c5cac05a608fbde5e70c489aebf9608c4d316579af2d165e838a290e1da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
