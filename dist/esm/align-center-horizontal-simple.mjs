export const name="align-center-horizontal-simple";
export const id="dl_99e88bb58de24b2ab2ec";
export const url=new URL("../icons/align-center-horizontal-simple.svg?v=5b3440a73264a2f9e11c1eb0c3598c2ad2f7ae847f66c21f3412f63862cee8b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
