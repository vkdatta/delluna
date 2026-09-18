export const name="rotate_left-fill";
export const id="dl_c4fa0a27715e4c098bb6";
export const url=new URL("../icons/R/rotate_left-fill.svg?v=4d6f9650edca64aa7bb8acc887156a0132f5bd4cbc3e2700f1a5546fcdd0f2ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
