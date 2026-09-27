export const name="checks";
export const id="dl_4e54a25ed3534ad79161";
export const url=new URL("../icons/checks.svg?v=5ba8eaec9052f610f4948ad5966511a29caea38719f08f6fed97a24e782bf6a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
