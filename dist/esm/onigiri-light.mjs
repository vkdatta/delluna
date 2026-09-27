export const name="onigiri-light";
export const id="dl_263d4f1402634b34b62e";
export const url=new URL("../icons/onigiri-light.svg?v=e912131c860172ee704332286b3ae27ee918acbd207b2aaf18215562776e5bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
