export const name="arrow-fat-lines-left-bold";
export const id="dl_e9245f772a624877bcad";
export const url=new URL("../icons/arrow-fat-lines-left-bold.svg?v=61da5ab992c50861674f5d2f1b624275f832305d34d47c965d2b252bde85ba47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
