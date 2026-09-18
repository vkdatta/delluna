export const name="globe_asia-fill";
export const id="dl_7d2e3c9a47944a15ac18";
export const url=new URL("../icons/G/globe_asia-fill.svg?v=44af9d869e0decdf68c3d6fc15867449dff5c8955477ffdf8039b8918ffbf39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
