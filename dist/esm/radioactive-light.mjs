export const name="radioactive-light";
export const id="dl_b874dbea56ad409e8afb";
export const url=new URL("../icons/radioactive-light.svg?v=38dd6432399215e11080c9d4b5220b8d1d4d8cdd21f9bbdacff33cd1c3a44636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
