export const name="border_all-fill";
export const id="dl_0900f64f8f0a458e8d0e";
export const url=new URL("../icons/border_all-fill.svg?v=709831a4fffb59fa23eaaf48c28c376db58adf423bb33baa312d8241b216b186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
