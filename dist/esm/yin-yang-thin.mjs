export const name="yin-yang-thin";
export const id="dl_74d88a43949f49a6942e";
export const url=new URL("../icons/Y/yin-yang-thin.svg?v=e311fa8f4a73d52399b44239fcd17fd535db65e3b751fc335579d299cfcccf81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
