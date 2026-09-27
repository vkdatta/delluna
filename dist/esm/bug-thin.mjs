export const name="bug-thin";
export const id="dl_6f790d46875e447ca1aa";
export const url=new URL("../icons/bug-thin.svg?v=80fa1f9d38a1f50e1519502c40a5e72623c299fd8357a7ab952f25655e463260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
