export const name="download_2";
export const id="dl_eec7ac8fd7c33e6d40eb";
export const url=new URL("../icons/download_2.svg?v=4a57cf8bab7474167b10d307cddfb3b05279ee4a0c97e532d0463d375959bca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
