export const name="mobile_sound";
export const id="dl_671fe93144adcc78c12d";
export const url=new URL("../icons/mobile_sound.svg?v=b8e955a3dbfd97fd29316a3af404ddb44fd9bde7283240082111b3b8a247bc71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
