export const name="number-circle-seven-bold";
export const id="dl_5f0f36ae3be240499763";
export const url=new URL("../icons/number-circle-seven-bold.svg?v=083a887a8cfc9c705ddc27513f8240754b742c8c94330a742ea13e99da9b47c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
