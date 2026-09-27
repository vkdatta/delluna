export const name="three-d-light";
export const id="dl_9cf4fafd15d0e138676e";
export const url=new URL("../icons/three-d-light.svg?v=151d52b69db52ccb6403b794f85208821e7109578ac8f0947d25796db36065b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
