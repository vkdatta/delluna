export const name="send_time_extension";
export const id="dl_1d7e3d8e55e35c2b2269";
export const url=new URL("../icons/send_time_extension.svg?v=0e5740cdf463d5b9a12fe14f9df734118b9eda830313cd2a70710bdc1c42d2e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
