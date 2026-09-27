export const name="move_vertical_alt";
export const id="dl_3baa6c26d2ff7d0a7bde";
export const url=new URL("../icons/move_vertical_alt.svg?v=0c6c47188b8f29f40f9c8cbea53238fac079b7ee66c34c46486f3bfa1f25ce67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
