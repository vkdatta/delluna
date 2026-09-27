export const name="arrows-merge-duotone";
export const id="dl_d081f0086fc94759adfc";
export const url=new URL("../icons/arrows-merge-duotone.svg?v=96279ea673b339da4f94130bab799484332313ad7fe9846af7835ff0273c79fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
