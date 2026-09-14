export const name="account_circle_off-fill";
export const id="dl_6fe7e94072fd43849344";
export const url=new URL("../icons/A/account_circle_off-fill.svg?v=cf89a38cc33062d8a89067af3c8362a12ab4ddd59fbdbd426497facd85c44ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
