export const name="compass-rose-thin";
export const id="dl_b25d727c7b5b4011bd91";
export const url=new URL("../icons/compass-rose-thin.svg?v=4eea5d270a31822c74a68acb4035b67912ca5cdeba2e980a6792c7588bc43364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
