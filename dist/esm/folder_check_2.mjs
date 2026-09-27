export const name="folder_check_2";
export const id="dl_105dc290507901ca1f81";
export const url=new URL("../icons/folder_check_2.svg?v=c4aeeb3ad6ef9f806b6fb3c0bdaedea3429b2b5b89dca3198f196099c7b95919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
