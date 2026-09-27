export const name="cast_for_education-fill";
export const id="dl_e36be88b296428c4eafb";
export const url=new URL("../icons/cast_for_education-fill.svg?v=d1f1656a57c153ec76170bb9c9f0509af47da7a7781823e1f573e49b8d516fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
