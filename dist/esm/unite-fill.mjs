export const name="unite-fill";
export const id="dl_8050929b4cd9116fa0d8";
export const url=new URL("../icons/unite-fill.svg?v=db885f0bbea54326ddacb71b807242422306a2e6fb3857433931fa31e93f1dd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
