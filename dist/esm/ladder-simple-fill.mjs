export const name="ladder-simple-fill";
export const id="dl_26a36c85399f44859614";
export const url=new URL("../icons/ladder-simple-fill.svg?v=0b78514b178b91bcaade1ffe3105dc37cf5a8bc2df8ebaf145e54fd077f0f9b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
