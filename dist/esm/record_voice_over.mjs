export const name="record_voice_over";
export const id="dl_d44e1b1f8ff74e509591";
export const url=new URL("../icons/R/record_voice_over.svg?v=569d91dc8dcb5231ee4c315e2945e13f081dcd00da0fe75de8ad71281ac15145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
