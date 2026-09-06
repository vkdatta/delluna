export const name="ny-times-logo-duotone";
export const id="dl_69176c759ff7439786c3";
export const url=new URL("../icons/ny-times-logo-duotone.svg?v=283d0738f06baa20af7ca09aadb0db3054af308285415ec7e08f4cfcae9878b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
