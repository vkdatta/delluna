export const name="repeat-fill";
export const id="dl_35394de6397d4187b156";
export const url=new URL("../icons/repeat-fill.svg?v=ff9f1232b2077efe549502beaa0e4024e0d9525876b74098d25f7886529e8864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
