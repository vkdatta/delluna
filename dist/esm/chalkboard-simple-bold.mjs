export const name="chalkboard-simple-bold";
export const id="dl_f0184edbe4734f579279";
export const url=new URL("../icons/chalkboard-simple-bold.svg?v=a44b5e9c832279e408b695b6ecad4174fff9d826dc6fa22474f0e7a0bd89298d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
