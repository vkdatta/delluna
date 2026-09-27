export const name="lucid_3-scale";
export const id="dl_3e36b5ed8c5f4c83a1b6";
export const url=new URL("../icons/lucid_3-scale.svg?v=e78b03f332d0534019799e2fb3273731d90850ff3145fc830974f7b903497592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
