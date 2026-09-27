export const name="mic_double-fill";
export const id="dl_4c6cbfa96fac750d8901";
export const url=new URL("../icons/mic_double-fill.svg?v=f8b0247ca97be7e75deabf2058f7bdd357af5239a9d1042e7b314e614ca5e94c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
