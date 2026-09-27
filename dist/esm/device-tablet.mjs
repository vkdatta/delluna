export const name="device-tablet";
export const id="dl_bdd2f2e94244401484d0";
export const url=new URL("../icons/device-tablet.svg?v=5b7e3fac18f881a0f1664da72b1e26f16972506aefcae3f7a5fb93f2253c9bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
