export const name="collapse_up_circle";
export const id="dl_c579fdf123a6ce827d34";
export const url=new URL("../icons/collapse_up_circle.svg?v=a351450ef7e65b4ae94603b17f012014deaf7bc34860a344fdb80f2be3ead955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
