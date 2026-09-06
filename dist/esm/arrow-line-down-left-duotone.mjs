export const name="arrow-line-down-left-duotone";
export const id="dl_5be3c216771f48fdbcc6";
export const url=new URL("../icons/arrow-line-down-left-duotone.svg?v=5539a201c0b3a2e51a18a2f187fa53e3ef615d4cad8744905a8a10eeadf7a9d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
