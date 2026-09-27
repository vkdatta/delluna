export const name="hdr_plus";
export const id="dl_fdf731d3ea9b890ec5a8";
export const url=new URL("../icons/hdr_plus.svg?v=23df03d30206a7a461e9626d2941da95e2d3f1b62d23efc042f8733b13bedc3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
