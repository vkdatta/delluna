export const name="letter-circle-h-thin";
export const id="dl_ba572c7a76ef41a489de";
export const url=new URL("../icons/letter-circle-h-thin.svg?v=beb5ddb7cd42787877a044655662379bbe8295ab81885e0666f99770f7912474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
