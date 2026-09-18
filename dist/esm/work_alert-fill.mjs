export const name="work_alert-fill";
export const id="dl_95384676f2b246dbb6dd";
export const url=new URL("../icons/work_alert-fill.svg?v=cd4988b2fd2a4509084d4ec696fceeeff8616c36f640d3f6e4ff22d1cffc9102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
