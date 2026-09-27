export const name="selection-slash-thin";
export const id="dl_3fcb5d32f390a7b3b525";
export const url=new URL("../icons/selection-slash-thin.svg?v=ba5738a14781133974cffeb1406d47f79ed2851b43ffbaee2789313cb0404d0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
