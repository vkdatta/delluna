export const name="selection-foreground-bold";
export const id="dl_298a631b6a1bfdde0a38";
export const url=new URL("../icons/selection-foreground-bold.svg?v=196b01f6c2b1c6bf7f43ca5fe376ba97646e31d92cd548cc2e371bf3e31f945f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
