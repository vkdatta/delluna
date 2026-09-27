export const name="horse-duotone";
export const id="dl_c445ab8b872f4a7da030";
export const url=new URL("../icons/horse-duotone.svg?v=f18b70394658a146d73f6ae0d982d95b7575d15d636c5d795c9d664915c37d59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
