export const name="voicemail-light";
export const id="dl_3b43cb473c28a22afd8d";
export const url=new URL("../icons/voicemail-light.svg?v=48bfcacbd1224f6a28a5f0af537870068c04205c6fd1ba0e8552295dda4a14be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
