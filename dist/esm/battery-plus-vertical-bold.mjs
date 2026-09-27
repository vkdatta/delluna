export const name="battery-plus-vertical-bold";
export const id="dl_fa38e011facf44a6bc5b";
export const url=new URL("../icons/battery-plus-vertical-bold.svg?v=b30025d34e8ff26591bfcd2ca28c63b34571312fc0744793b7449564ed766b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
