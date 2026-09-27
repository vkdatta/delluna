export const name="file-jpg-duotone";
export const id="dl_535eabb8f55040408da8";
export const url=new URL("../icons/file-jpg-duotone.svg?v=0dbcc27e0fcf567fe12e4060547e8c47ce860e59c872cf9b585383188d67366f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
