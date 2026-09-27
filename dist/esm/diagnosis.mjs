export const name="diagnosis";
export const id="dl_92aa930029ff65d487d7";
export const url=new URL("../icons/diagnosis.svg?v=eb669ab507178fa6b99181d16d32e51c63f0bb6c54831b0527ad8b9cccac1bd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
