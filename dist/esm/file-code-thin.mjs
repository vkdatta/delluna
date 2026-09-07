export const name="file-code-thin";
export const id="dl_37d59867dd804775b322";
export const url=new URL("../icons/file-code-thin.svg?v=f798d77b56ac23219b47c51ef2bed49891cb8e17670049ed1c9b821726d4d44a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
