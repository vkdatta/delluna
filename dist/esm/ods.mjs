export const name="ods";
export const id="dl_736149ff33405e5421b0";
export const url=new URL("../icons/ods.svg?v=93f4f04b3076aec58783502a2056d92fa650532cfb06d63def3e91f633cf01bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
