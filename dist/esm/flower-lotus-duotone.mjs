export const name="flower-lotus-duotone";
export const id="dl_1144d8ab1f1344e0b649";
export const url=new URL("../icons/flower-lotus-duotone.svg?v=65f9dfa89e5c65b4eb5bb71b749fff13ad2962a4e479bfc2c730e8b005e3be87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
