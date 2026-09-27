export const name="lucid_2-landmark";
export const id="dl_d37a4d135e8344e48724";
export const url=new URL("../icons/lucid_2-landmark.svg?v=ebd306226af4fcbf6c802fb17c34018172cae72c3251b2806e138241f74c43c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
