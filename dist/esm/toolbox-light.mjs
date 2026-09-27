export const name="toolbox-light";
export const id="dl_1ead95b7751072827e23";
export const url=new URL("../icons/toolbox-light.svg?v=e76339d1b684d2781c72f9013d5680ef76ff3bc6ffbec5a55bef9f87ccd9460a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
