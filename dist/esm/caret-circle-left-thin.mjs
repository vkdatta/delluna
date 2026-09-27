export const name="caret-circle-left-thin";
export const id="dl_36b3a12b44fa46e2b13d";
export const url=new URL("../icons/caret-circle-left-thin.svg?v=49b601fe589c785a3ee99fd65a731b71c38e144b6b11f9cf1f283d7329a07e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
