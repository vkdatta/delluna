export const name="auto_awesome";
export const id="dl_7cbe64e0fe7ee1e8b300";
export const url=new URL("../icons/auto_awesome.svg?v=8764dde047118ce6d14731adf2a31377f82bf00cc4d05cfe48de661c5d5d8439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
