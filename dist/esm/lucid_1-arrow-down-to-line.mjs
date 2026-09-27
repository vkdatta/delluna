export const name="lucid_1-arrow-down-to-line";
export const id="dl_b67871f543934956a771";
export const url=new URL("../icons/lucid_1-arrow-down-to-line.svg?v=a53e7c62599b5e793945f2f50c35b6d91fb40eda69a6ffca7ba48e3818a20bc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
