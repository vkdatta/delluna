export const name="mail";
export const id="dl_82a8ca40781a49a8b31e";
export const url=new URL("../icons/all_60_named_svgs/mail.svg?v=a4793aa60a866e47304c10c8a5187d3d72be7ce488ed6688787fe9170e5fde67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
