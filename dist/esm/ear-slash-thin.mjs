export const name="ear-slash-thin";
export const id="dl_b78acb17aeca45e98ecf";
export const url=new URL("../icons/ear-slash-thin.svg?v=8340b4684566d7152e754104a477f1520665a0bbb471c2b39e0dcbf8fe54392b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
