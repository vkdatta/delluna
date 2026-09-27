export const name="arrow-square-left-light";
export const id="dl_0d31a59f402f4ea89136";
export const url=new URL("../icons/arrow-square-left-light.svg?v=d4fca15b552f00838bd5cebc606a897b0bc6612479fdaf9d7216475c5a12239e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
