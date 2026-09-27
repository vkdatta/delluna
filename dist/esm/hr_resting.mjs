export const name="hr_resting";
export const id="dl_470c97d453cf3538d58a";
export const url=new URL("../icons/hr_resting.svg?v=6b2c4959be407dc9898cae05f98d44720ef318d4d66ce22ecdaa91dc956ea6f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
