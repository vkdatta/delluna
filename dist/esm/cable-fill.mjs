export const name="cable-fill";
export const id="dl_0e3444689feb1b05cc6b";
export const url=new URL("../icons/cable-fill.svg?v=ebb0d18aea528ba7c3692d86b51048253a4d628501f22666d9db63a330252ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
