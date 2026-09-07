export const name="screencast-light";
export const id="dl_9d061af5449e4320bcc4";
export const url=new URL("../icons/S/screencast-light.svg?v=f48cae3beaa4f34b0acb821be8ea46eba149a52679f2dd8d62f2619aa6cf41b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
