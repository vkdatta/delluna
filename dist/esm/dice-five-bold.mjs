export const name="dice-five-bold";
export const id="dl_8d8d1896184d4d1aaf6f";
export const url=new URL("../icons/dice-five-bold.svg?v=3f197e62d7e2d2e1f7ebb5f7311cdbf8c76eb6ab6344b15700bca21234c8669e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
