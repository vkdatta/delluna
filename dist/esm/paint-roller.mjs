export const name="paint-roller";
export const id="dl_15402e210d0549478e8d";
export const url=new URL("../icons/paint-roller.svg?v=bc2aa08560a656b07336d526e14bca9f92160291d197c3dc1ec081bd41e066cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
