export const name="cigarette-slash";
export const id="dl_b37630c9d42f4fe69dc0";
export const url=new URL("../icons/cigarette-slash.svg?v=8003e0f819c0351d0940ca9fc9855492ccb712af672e11aa3f62994201ec3976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
