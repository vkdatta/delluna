export const name="person_check-fill";
export const id="dl_9e95b140c34af53ca2fd";
export const url=new URL("../icons/person_check-fill.svg?v=25eef9a1ee15405aa3d4e741b1c2de645c8cd7b24db5b295c796da6db6daf59b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
