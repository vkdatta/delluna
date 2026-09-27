export const name="enterprise_off-fill";
export const id="dl_ea7d77d55b9879d96eb9";
export const url=new URL("../icons/enterprise_off-fill.svg?v=a67c1427cccc8a28eb063af89080bc04ba8124c1ccd583afd05e3ec699baaeea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
