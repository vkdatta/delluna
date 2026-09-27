export const name="align-center-horizontal-simple-duotone";
export const id="dl_79c2d6dedcfb415aac69";
export const url=new URL("../icons/align-center-horizontal-simple-duotone.svg?v=8f82bc63ebe4f5be09370e906cb17410e022477acff8705bb750cfc464ee2cf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
