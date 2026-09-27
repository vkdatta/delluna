export const name="guitar-bold";
export const id="dl_b30db119a1114f5384cc";
export const url=new URL("../icons/guitar-bold.svg?v=b29224aedf08ca71cbd889ad7e111a71612c4f4a42af18461e9b18c95d9f02f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
