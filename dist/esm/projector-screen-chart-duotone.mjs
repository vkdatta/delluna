export const name="projector-screen-chart-duotone";
export const id="dl_26fe50121aa74b5abd3b";
export const url=new URL("../icons/projector-screen-chart-duotone.svg?v=eb14bc614b806b627576510f69465ff104d90f660480cb5a8969079f1cb29a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
