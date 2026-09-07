export const name="arrow-down-right-light";
export const id="dl_60093679caba4530b684";
export const url=new URL("../icons/arrow-down-right-light.svg?v=9d607a2ffcbc4346e6902287f4707811fdaa152d576eb582fcdbf1ab3ebbfeb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
