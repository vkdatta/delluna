export const name="lucid_2-git-fork";
export const id="dl_ea81be62858348449361";
export const url=new URL("../icons/lucid_2-git-fork.svg?v=fab295c3fdd69e5fc5c738061d5375e4ea30e2b784b6da7aea79908cffc5ac9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
