export const name="chart-line-light";
export const id="dl_b7ad06951b994dbdb3b7";
export const url=new URL("../icons/chart-line-light.svg?v=c7f841a96a18508019428c4860b9f3bd7b7a81eb2e948421c9b037fc083ce726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
