export const name="speaker-simple-slash";
export const id="dl_ed5372f4f61be23d9bbd";
export const url=new URL("../icons/speaker-simple-slash.svg?v=7710b2ad8287b8e5f040dfe2cb0518788fd73234e9acd36ea622db9911eb2521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
