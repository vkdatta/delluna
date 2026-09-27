export const name="behance-logo-bold";
export const id="dl_cc79558ab4bd4d878e24";
export const url=new URL("../icons/behance-logo-bold.svg?v=1363fd25200416365ff9f12b314082f320d38538cefeeb31dd3c3ab0177be453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
