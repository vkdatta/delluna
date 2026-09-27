export const name="sun-dim-thin";
export const id="dl_6a1b643980d9803d9066";
export const url=new URL("../icons/sun-dim-thin.svg?v=0c716d4db8aed62daeee004c13832662995ffbfd6219b73a3fa7e5190743af0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
