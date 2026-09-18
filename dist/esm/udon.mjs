export const name="udon";
export const id="dl_f3076d940f384fa9bdcc";
export const url=new URL("../icons/U/udon.svg?v=ed7c1057e7c2faa07adec2f7326943ad0bb3d99fd7c9227e0cd5f56830cfc802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
