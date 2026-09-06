export const name="hamburger-thin";
export const id="dl_83d19c919b504ed0901f";
export const url=new URL("../icons/hamburger-thin.svg?v=4e4d44559bebf6afe100f5bea5e5ebedcf98e8f904364cad282fd635fa5f581f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
