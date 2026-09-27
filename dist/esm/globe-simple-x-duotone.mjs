export const name="globe-simple-x-duotone";
export const id="dl_7126440fb22e471cade1";
export const url=new URL("../icons/globe-simple-x-duotone.svg?v=8af7e8fa818ceaa0ba14bd662c45e300c9b59e43021b765f92837fdb3bdb50e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
