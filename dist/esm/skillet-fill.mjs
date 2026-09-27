export const name="skillet-fill";
export const id="dl_bd8ab95202861ec7c078";
export const url=new URL("../icons/skillet-fill.svg?v=1228dfe5d95b7633f7623b6cb97c35631181464bb871099dd95f45eddff2f144",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
