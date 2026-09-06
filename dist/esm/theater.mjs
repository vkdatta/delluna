export const name="theater";
export const id="dl_3ebbaaa83be5455c8f43";
export const url=new URL("../icons/theater.svg?v=9fc7992624936b4df310fed08f693d0797e2a929fe090afa9238faca6e99958f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
