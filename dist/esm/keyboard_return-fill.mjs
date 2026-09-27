export const name="keyboard_return-fill";
export const id="dl_17edf8782617aa593bc8";
export const url=new URL("../icons/keyboard_return-fill.svg?v=b430570568ae4cd3ec47c0def9593870bc590c68c83cd068292fac2e792cfd32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
