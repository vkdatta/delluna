export const name="cell-signal-x-light";
export const id="dl_1db744bcf75243c88009";
export const url=new URL("../icons/cell-signal-x-light.svg?v=762a8df6b246625453c8546676ddb52d8169f21c609472e38a80d6fb97f48912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
