export const name="straight";
export const id="dl_4a76019438a4c46bdeeb";
export const url=new URL("../icons/straight.svg?v=ba0e4255d725df62ec45630b3ec8f8b8065222efa37d7201fd133c2654d05ff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
