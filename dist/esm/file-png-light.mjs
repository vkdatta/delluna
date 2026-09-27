export const name="file-png-light";
export const id="dl_7e0ca4c03fb4458ab2bb";
export const url=new URL("../icons/file-png-light.svg?v=33631239958136bbbe2d0e8adb19850b470617198d03b8213bd98d3ea93a2940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
