export const name="speaker-simple-x-fill";
export const id="dl_d506f36c3cf041fda47b";
export const url=new URL("../icons/S/speaker-simple-x-fill.svg?v=b069a6036f49d7129daf045f9edcdd2e82a37bb960f08121f05d38a5ef2369e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
