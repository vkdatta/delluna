export const name="brain-fill";
export const id="dl_0cd4fc51292b4d6d969e";
export const url=new URL("../icons/brain-fill.svg?v=e2cb7f78785fa12f301f030cc5ef2dc4e54db9106e5354236c5b55843f9d7bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
