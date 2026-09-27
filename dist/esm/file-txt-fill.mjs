export const name="file-txt-fill";
export const id="dl_d31a41b3f5144688bace";
export const url=new URL("../icons/file-txt-fill.svg?v=5b63ac4428bb747dd42b8a346a05a76e2212446d6632b90b199469f805d7b079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
