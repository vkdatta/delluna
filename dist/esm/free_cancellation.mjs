export const name="free_cancellation";
export const id="dl_ce5c12b8ca4ca1c9d0d2";
export const url=new URL("../icons/free_cancellation.svg?v=24dfcc282f0a4f35b69ba53e8cb38b1013dc175c57209901cd93537583b4bc81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
