export const name="male-fill";
export const id="dl_04a4b979ae772091acca";
export const url=new URL("../icons/male-fill.svg?v=fc361b21f14beaa7457702d311457ebea15787d365f94ca3f7b90afc92e8df40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
