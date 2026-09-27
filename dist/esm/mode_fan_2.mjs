export const name="mode_fan_2";
export const id="dl_8af597d4053ad9ff89a8";
export const url=new URL("../icons/mode_fan_2.svg?v=b682297fd226d9fbadda1f24c17dc11f8d8f497dd068bfae1ca20db74acc6ad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
