export const name="camera-plus-light";
export const id="dl_eb643187cb6e4b6d90a8";
export const url=new URL("../icons/camera-plus-light.svg?v=71dc30e6042e6d8f8808f8a629802ba2bf14275c66745116ab9fb80f2a6e5194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
