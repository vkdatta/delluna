export const name="chart-line-light";
export const id="dl_b7ad06951b994dbdb3b7";
export const url=new URL("../icons/chart-line-light.svg?v=ba01d71276fe84033cd6878cae6b375c672bcc27fc50e1d38cc45de276e2e0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
