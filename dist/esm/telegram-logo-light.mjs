export const name="telegram-logo-light";
export const id="dl_e7247772e706cfd4d183";
export const url=new URL("../icons/telegram-logo-light.svg?v=d3c3285fb4b587d8340ae48c56e927a2ed4e960ab88abc355e79590ad5119ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
