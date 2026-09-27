export const name="3p-fill";
export const id="dl_12751ce21bd4c821e65c";
export const url=new URL("../icons/3p-fill.svg?v=8e26495f6915d5336aa13efe4beaefccfe05527e443f2de40eef157be5030fa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
