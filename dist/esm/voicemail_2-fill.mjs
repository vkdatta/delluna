export const name="voicemail_2-fill";
export const id="dl_b1efc330fe8c4117aec7";
export const url=new URL("../icons/voicemail_2-fill.svg?v=6f50d2f4ae1d32cb18f8456a99abc4c2f342b073c7353313552d9043fc8356c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
