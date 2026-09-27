export const name="align_horizontal_left";
export const id="dl_49d48a1ed0f4f5b1e837";
export const url=new URL("../icons/align_horizontal_left.svg?v=24138eca404c7e2843f0e5bd61744c16ae4669f643c7526612e9901e9d2ae14c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
