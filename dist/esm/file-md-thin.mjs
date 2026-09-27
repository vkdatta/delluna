export const name="file-md-thin";
export const id="dl_c4b345346a2241f5b2c2";
export const url=new URL("../icons/file-md-thin.svg?v=2daf7d4bf7830ef4226fc1fca94e17238d59f23610034b9892798fd58f394423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
