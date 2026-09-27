export const name="crosshair-simple-light";
export const id="dl_e95cc02a513246419423";
export const url=new URL("../icons/crosshair-simple-light.svg?v=f5ae921a59591d5f8ac4d2a51ea247fbbca819c8be5b74f01ac63d6235b1f24c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
