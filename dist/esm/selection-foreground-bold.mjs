export const name="selection-foreground-bold";
export const id="dl_36764a8a02b94c2db08e";
export const url=new URL("../icons/S/selection-foreground-bold.svg?v=82adfef55d7fa54c241314aed43da36aa7b744dac51f6ef593883592e140487c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
