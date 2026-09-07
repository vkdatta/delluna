export const name="speaker-none-duotone";
export const id="dl_9231a7a9f618471babba";
export const url=new URL("../icons/S/speaker-none-duotone.svg?v=d75fc32c7e98ea6e38613ebbe01ff8a29cc68af6490ddcbd79c6a64d83cb1a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
