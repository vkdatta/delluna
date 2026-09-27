export const name="arrow-u-right-down-bold";
export const id="dl_a187b503962c4bf5afad";
export const url=new URL("../icons/arrow-u-right-down-bold.svg?v=3b14d06a845623d7a6581bed09e3ded1a08ba5443d9bfce5718197b95eba9a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
