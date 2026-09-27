export const name="placeholder-thin";
export const id="dl_68cfa4216a454f67bf90";
export const url=new URL("../icons/placeholder-thin.svg?v=6af18ffc452cf4728d1e052549f388094c2c821b7bc26a6ff52646a7987928b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
