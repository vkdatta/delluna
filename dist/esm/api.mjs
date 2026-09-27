export const name="api";
export const id="dl_7f336b6aeac7262ef9db";
export const url=new URL("../icons/api.svg?v=6639559e1d3bde57059121c44f7ecd6f4d66e83bf7cbd31791258f98f3a5d430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
