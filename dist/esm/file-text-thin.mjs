export const name="file-text-thin";
export const id="dl_98a5cb612abe4fcb8c8a";
export const url=new URL("../icons/file-text-thin.svg?v=b03151b8e2fa613a8283973b60e02651700afc42b4b6d0d47b0f74482b9ec898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
