export const name="lucid_2-loader";
export const id="dl_f027c227f5444b3e9374";
export const url=new URL("../icons/lucid_2-loader.svg?v=ed2433776f272e55d06e1cc8f31e5382e64a359d5670ecc83f80d94d9be039bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
