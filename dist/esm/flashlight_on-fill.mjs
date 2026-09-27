export const name="flashlight_on-fill";
export const id="dl_c2ef0c17528d5ec3b117";
export const url=new URL("../icons/flashlight_on-fill.svg?v=bf6c261145008027b9627dd740e1bdd3b450fb7cd19948fa857636a78c38687a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
