export const name="stack_hexagon";
export const id="dl_cb167bec4b5ba5267c69";
export const url=new URL("../icons/stack_hexagon.svg?v=02207c7905abe9520bbba0675d1f6638a11f40e81378804a990a122c1027282b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
