export const name="health_metrics";
export const id="dl_34a520efeed44d555c0c";
export const url=new URL("../icons/health_metrics.svg?v=e7316246df265671a69cbd8ff86466a0edcfefc65041fb4744f5a5f150dde313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
