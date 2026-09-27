export const name="square-split-vertical-light";
export const id="dl_be45a3490e09943dcbe0";
export const url=new URL("../icons/square-split-vertical-light.svg?v=c6fe8dbdc4ff60f880adc0d7be1eb6c5deaf1ef52615690f19f6277f44d4ed19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
