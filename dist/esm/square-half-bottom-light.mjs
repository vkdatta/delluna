export const name="square-half-bottom-light";
export const id="dl_7c15cc8d9927babee504";
export const url=new URL("../icons/square-half-bottom-light.svg?v=30607f5e43fc97c76b3c4e14f6691f8b98f97607e63713f6f02d4b6165c7d2e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
