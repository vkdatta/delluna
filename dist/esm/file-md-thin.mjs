export const name="file-md-thin";
export const id="dl_c4b345346a2241f5b2c2";
export const url=new URL("../icons/file-md-thin.svg?v=fa45265721e105d2f10360a8f1425fdc5d98a5ecf679931077a79c20633fbc98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
