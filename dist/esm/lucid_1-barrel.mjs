export const name="lucid_1-barrel";
export const id="dl_d795478f848b4242bef5";
export const url=new URL("../icons/lucid_1-barrel.svg?v=b8e9a48d4013ee1948fa74ef2f3953ae64c88b6efbd9a00c7b28035780b987cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
