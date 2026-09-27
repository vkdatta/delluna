export const name="rewind";
export const id="dl_69b970f927cd48f1b624";
export const url=new URL("../icons/rewind.svg?v=4fbc12882ec745f1e55b52bfbeb55b891bb5d10b5796dc4382209c5d51331beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
