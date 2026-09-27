export const name="flowchart-fill";
export const id="dl_c49f9b2dc09c849c18a5";
export const url=new URL("../icons/flowchart-fill.svg?v=fcaaf1c9c07cb673d7b669f64adb7c7d824b79d4dffc0c0addfd406f45621f76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
