export const name="identification-badge-fill";
export const id="dl_fdcae8e2cf0347b4882c";
export const url=new URL("../icons/identification-badge-fill.svg?v=772e0caaa75808fa6b1ed4a7389d45dd3b0bd3f96c9fbffee480faae32791846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
