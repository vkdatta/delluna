export const name="meta-logo-fill";
export const id="dl_58db70eb00ef462bb19a";
export const url=new URL("../icons/meta-logo-fill.svg?v=5b0d8897adf3acac0024185e07864eb8c7f045c1e6f93e79a2dcecdcdc8acc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
