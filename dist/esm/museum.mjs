export const name="museum";
export const id="dl_69f2010293d889725aa8";
export const url=new URL("../icons/museum.svg?v=7ca27f6c178e1f179298a7768e15d78c0852fcb40c0e22ead46343336280cdfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
