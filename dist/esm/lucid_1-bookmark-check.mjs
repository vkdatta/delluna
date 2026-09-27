export const name="lucid_1-bookmark-check";
export const id="dl_8db5a11b4db4403483f2";
export const url=new URL("../icons/lucid_1-bookmark-check.svg?v=09133272c2035dd6e736675d5a7250741e351235eb39e0dfe849de6c7bc16a35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
