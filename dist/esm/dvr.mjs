export const name="dvr";
export const id="dl_051e1aa5add14eb98347";
export const url=new URL("../icons/D/dvr.svg?v=51eab11a65d9c71cff17ca625fd17e94b5ac4ad66ca8740422e47387c116c338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
