export const name="number-square-four-thin";
export const id="dl_ebefd27194b047c19418";
export const url=new URL("../icons/number-square-four-thin.svg?v=392cc62e5df079d2d2af6e2c2e0d43a33be49ac313a0ac0bf5b66e342b9c73b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
