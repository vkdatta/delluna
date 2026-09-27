export const name="arrow-square-up-left-fill";
export const id="dl_bce753a4701b44368760";
export const url=new URL("../icons/arrow-square-up-left-fill.svg?v=5f7a8dd25e60b9671ff099e84b3389f39cef874188c10c4137110af65daa5228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
