export const name="bell-ringing";
export const id="dl_ac2098e2ac95458b91c6";
export const url=new URL("../icons/bell-ringing.svg?v=fe22f9fc41a5fc83538046ccb7ad3634315d97d555f1d1038ea2bad8813679c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
