export const name="wifi_home";
export const id="dl_cba395a5ade6bc245f76";
export const url=new URL("../icons/wifi_home.svg?v=6635d0470d0c0a1f4c0617c560372d9bd26164bad31c23e5036735c7880a121d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
