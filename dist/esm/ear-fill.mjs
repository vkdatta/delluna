export const name="ear-fill";
export const id="dl_3a54e1ba5fc44414acb7";
export const url=new URL("../icons/ear-fill.svg?v=372d6c8de442ad20af2dd0854fce0855d0e76a8f80ddf2ebfb7e016433517327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
