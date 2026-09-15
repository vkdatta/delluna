export const name="doorbell_chime";
export const id="dl_4f5b7d207a2144cbac44";
export const url=new URL("../icons/D/doorbell_chime.svg?v=80108e67097ab427f37388dfe2deb0f4c020e82e6688f8326f99c47899190f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
