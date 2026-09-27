export const name="gavel-duotone";
export const id="dl_aaeea7b1e09d460aa16e";
export const url=new URL("../icons/gavel-duotone.svg?v=465c0c27afaf777851b28f4d63373c56c2dc86cd650105793d1741d4779ee4d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
