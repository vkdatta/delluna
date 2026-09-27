export const name="shield-checkered";
export const id="dl_787499ff1a41ededad4b";
export const url=new URL("../icons/shield-checkered.svg?v=645c64bca3efc42e902b9acca585f08f6c66730d203fc658eacf09eea312787b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
