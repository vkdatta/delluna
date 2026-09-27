export const name="lucid_2-keyboard-off";
export const id="dl_023e218b04a84cd38f16";
export const url=new URL("../icons/lucid_2-keyboard-off.svg?v=8b829984985ce7062a1b0005273a148f395e4793e3767b411a7c1fd391c6c8ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
