export const name="sketch-logo";
export const id="dl_a58846fd6f394e7b9009";
export const url=new URL("../icons/S/sketch-logo.svg?v=701dd61660f43aa305c135c9c7d9db0be13d38de129f08feaeec486c77e6f887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
