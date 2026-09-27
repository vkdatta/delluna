export const name="yarn-thin";
export const id="dl_c44b3ef8eeae2b0e32a2";
export const url=new URL("../icons/yarn-thin.svg?v=1ba9f440b344346617e6a05ff7e7cd3b81ac0f8d5b36024247c12805865102c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
