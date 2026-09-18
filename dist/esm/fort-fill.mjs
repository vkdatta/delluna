export const name="fort-fill";
export const id="dl_8b488b58b31f45c09d04";
export const url=new URL("../icons/fort-fill.svg?v=59c287eb8ff4e3e1660f825fd2dd6d386bd9565e7d2bb62992b23859dea2cf19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
