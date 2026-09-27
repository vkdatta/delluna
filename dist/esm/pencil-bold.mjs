export const name="pencil-bold";
export const id="dl_050ce0ff9ec84d1c90f7";
export const url=new URL("../icons/pencil-bold.svg?v=e503136abc0141b6c76f1709ab9518364c6ebb660cce1506de5a3de0b1968cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
