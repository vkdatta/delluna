export const name="widget_small";
export const id="dl_faf0ca28eef6b70ddeb1";
export const url=new URL("../icons/widget_small.svg?v=c2c73c66b1e96fade03671a206512c423763d54f6391fa9fd31ebff5bca54309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
