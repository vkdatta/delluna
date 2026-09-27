export const name="stethoscope-fill";
export const id="dl_cc3c4fad190d78770335";
export const url=new URL("../icons/stethoscope-fill.svg?v=ec4d4bc6bcf5b5a8971dd9ede25e82593f06c8d134ad133bcdf275428e10cd84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
