export const name="island-fill";
export const id="dl_fca75b2b8fff44bdacc1";
export const url=new URL("../icons/island-fill.svg?v=c5a6dad6d95022d76a7f2f84678127adcbbc2ebbca1eba4f60e5fc6880ce3a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
