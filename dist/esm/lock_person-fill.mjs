export const name="lock_person-fill";
export const id="dl_c62b0d64c84df0488c44";
export const url=new URL("../icons/lock_person-fill.svg?v=b136d0b5cba677d4235a841fc952dd4dad389e687a792221e40d14dfe5271ede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
