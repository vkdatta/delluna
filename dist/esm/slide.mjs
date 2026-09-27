export const name="slide";
export const id="dl_f9d8e0e33db347178a01";
export const url=new URL("../icons/slide.svg?v=17c3ba04cb50df64372d6665ad6a0c8cb9b29a50cddc53e3a7ace2cbf295ac36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
