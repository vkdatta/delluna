export const name="lucid_3-square-code";
export const id="dl_8df681bbd56b40b783d5";
export const url=new URL("../icons/lucid_3-square-code.svg?v=a8c48161ee903c5d6fdc82cf8161e86f306875ecba77602535a8096dcfbd5130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
