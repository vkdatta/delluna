export const name="skip-back-circle-thin";
export const id="dl_ef856dbf716d4d25a797";
export const url=new URL("../icons/S/skip-back-circle-thin.svg?v=e910204108e3b0eb8fd15f76e8cd2c752237c72e874e5390251749cd80f8f32a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
