export const name="lucid_1-bluetooth-off";
export const id="dl_6b923f01672142c8bdc8";
export const url=new URL("../icons/lucid_1-bluetooth-off.svg?v=debcba7e11a98f543d1c60d6c38b3547b53b36c36a45da18c9751fa489dc9d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
