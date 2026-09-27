export const name="near_me";
export const id="dl_888a2b8a19adb03704d7";
export const url=new URL("../icons/near_me.svg?v=5bb52c22ca50b940cb0f0cf907647b624c70fe4820cf57ff2b16a3ffdd9efa5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
