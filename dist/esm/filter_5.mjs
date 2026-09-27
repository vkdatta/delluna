export const name="filter_5";
export const id="dl_d97403011e1cfdacaef8";
export const url=new URL("../icons/filter_5.svg?v=1ee9644df85101306c06cc8e33f6f323c53a57b8a94b0116fd56b9d87fee2611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
