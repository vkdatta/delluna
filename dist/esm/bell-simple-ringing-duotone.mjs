export const name="bell-simple-ringing-duotone";
export const id="dl_7603bf096eea46acb7aa";
export const url=new URL("../icons/bell-simple-ringing-duotone.svg?v=58192c10600414c85142f913084d3b0fa199dffbb95e3af229092047ca8429af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
