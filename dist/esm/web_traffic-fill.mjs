export const name="web_traffic-fill";
export const id="dl_e92740f452a0e3358fe6";
export const url=new URL("../icons/web_traffic-fill.svg?v=8309fbccbbe2835b577986b17e6c3b427d3e32d65a3927ad709e99b834664358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
