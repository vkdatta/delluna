export const name="caret-line-up-fill";
export const id="dl_4d594faf9582467c844b";
export const url=new URL("../icons/caret-line-up-fill.svg?v=5f77b9fbc9b6dc34f1ea6d65bb4e32bdb9963f7c3eb5906a8ee1b3ad996c0879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
