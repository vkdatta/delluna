export const name="linux-logo";
export const id="dl_b898449c5eab4fd5ae66";
export const url=new URL("../icons/linux-logo.svg?v=13a20af64ccf10464f55313c16d6dcc4fd1c30d8915a375df29bc17c96c3a6ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
