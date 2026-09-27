export const name="cached";
export const id="dl_d66a4d623ad54323ac55";
export const url=new URL("../icons/cached.svg?v=09238215965b9aa3bbe2e10776579644630708aa62b5079924a69ac524f022bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
