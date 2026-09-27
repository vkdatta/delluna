export const name="rainbow";
export const id="dl_df28536f284f4115b11c";
export const url=new URL("../icons/rainbow.svg?v=f28fd5cc6ba9bb4c5696c3645446324af5e8a5e796e2b1ad24ab10b999070ba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
