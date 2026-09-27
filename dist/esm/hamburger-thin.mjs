export const name="hamburger-thin";
export const id="dl_83d19c919b504ed0901f";
export const url=new URL("../icons/hamburger-thin.svg?v=4a17ca5b55542247c50324a20632c851a2a761e66f6a186858bc3101504a350a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
