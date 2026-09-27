export const name="shapes-light";
export const id="dl_f1e84ff5b0035c28942b";
export const url=new URL("../icons/shapes-light.svg?v=6677ba39f742f62e45b7f797ded39dd5d86d779358929e2ce14528d29e9ffcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
