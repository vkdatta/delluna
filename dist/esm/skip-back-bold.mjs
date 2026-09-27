export const name="skip-back-bold";
export const id="dl_0ff41b34df304545013a";
export const url=new URL("../icons/skip-back-bold.svg?v=7ac2b49a264986c97494201ccff00f39351a75a760fd3b6c3e0bd092c48e3fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
