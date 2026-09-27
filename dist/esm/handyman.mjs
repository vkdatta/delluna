export const name="handyman";
export const id="dl_20d98a98e4dd3635368e";
export const url=new URL("../icons/handyman.svg?v=64647a3010f8d5f33b038f1ec536b767abf64ec82dd93be617dcf748cb6f02be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
