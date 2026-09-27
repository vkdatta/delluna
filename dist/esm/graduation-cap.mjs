export const name="graduation-cap";
export const id="dl_86a330892792430d9795";
export const url=new URL("../icons/graduation-cap.svg?v=f940271b5e45b51d9cc753cd4906758be73a4b21e9e4f7f8e7b4449876e3db19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
