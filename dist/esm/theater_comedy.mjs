export const name="theater_comedy";
export const id="dl_7920ba42477ce7c374ff";
export const url=new URL("../icons/theater_comedy.svg?v=9b573d8f4d1ba9ee8543c39aca2bc6d1d09a1fefc195ba3a278d6fe3d819f367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
