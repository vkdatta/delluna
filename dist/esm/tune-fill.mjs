export const name="tune-fill";
export const id="dl_d8da9a21f2f39bf68c5f";
export const url=new URL("../icons/tune-fill.svg?v=ddc21e062bbb737e6ce99649c153d4563f75e09303a3554d89aa2a21514ac910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
