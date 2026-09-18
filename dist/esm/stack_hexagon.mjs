export const name="stack_hexagon";
export const id="dl_00a2e64edb494e6284f1";
export const url=new URL("../icons/S/stack_hexagon.svg?v=cc0ba43e1ea365592a0ac66c91c258cd8a9726d1e6d48705a7b9f176ee3b0946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
