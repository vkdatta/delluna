export const name="6_ft_apart-fill";
export const id="dl_126f381c09835b4898b2";
export const url=new URL("../icons/6_ft_apart-fill.svg?v=991b3222fafa34597c9f904613cf4b12daa64af85475c2c12d5a48c4c9a96f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
