export const name="globe-simple-x-thin";
export const id="dl_0b5b4349be904b9898f3";
export const url=new URL("../icons/globe-simple-x-thin.svg?v=d8650e4bc0f6e858cbac7cbf841db32f5907c67e7bd6428e6f5175d71937c9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
