export const name="square-menu";
export const id="dl_38f3f36c38d14cfdb300";
export const url=new URL("../icons/square-menu.svg?v=24130132394914d6eadeb9e672d424fe19226add1d4ae851bc1429f88c225860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
