export const name="sort-ascending-thin";
export const id="dl_ebbda24b06afae58e37f";
export const url=new URL("../icons/sort-ascending-thin.svg?v=39542590a1904a1d42d0d5b8ddfcd97b0b25e5e1c560f7681497038f5149f277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
