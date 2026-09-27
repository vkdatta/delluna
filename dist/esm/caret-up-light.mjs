export const name="caret-up-light";
export const id="dl_3faa7eecf3a04c7cabb6";
export const url=new URL("../icons/caret-up-light.svg?v=897ae23c767e24b796212d50aa3be23c234418a1fcad3a70d6bd5e5a6ffbc4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
