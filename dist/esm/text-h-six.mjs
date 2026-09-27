export const name="text-h-six";
export const id="dl_efbbad7b6bd08c09b938";
export const url=new URL("../icons/text-h-six.svg?v=86415e49ef81afec210a94ebb5690740739ebb74550f22d4d71183f6beb7e837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
