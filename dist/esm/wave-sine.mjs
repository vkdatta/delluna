export const name="wave-sine";
export const id="dl_d1043e4a7c7f39f49b6d";
export const url=new URL("../icons/wave-sine.svg?v=3be689afd9a500b9c522b5a8097ddec584dd1dd2d261cf1a7bfb9504c97c4bd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
