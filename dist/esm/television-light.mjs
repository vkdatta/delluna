export const name="television-light";
export const id="dl_35927ceb4584447a811d";
export const url=new URL("../icons/T/television-light.svg?v=91e37e712a3241bd3e7d634dde63f0192a478401ff85b097ff75149e512b56e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
