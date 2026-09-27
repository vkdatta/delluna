export const name="toys_fan-fill";
export const id="dl_ec6d426ce3200efea2fa";
export const url=new URL("../icons/toys_fan-fill.svg?v=b5df2d1aeef3f72abc6c6dcd7dd37e2af98f9a9e76d549924f6b94a02c3a0dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
