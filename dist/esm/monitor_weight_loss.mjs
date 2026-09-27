export const name="monitor_weight_loss";
export const id="dl_3846f67f278824690fc9";
export const url=new URL("../icons/monitor_weight_loss.svg?v=324034f2e5a2085b94d5438c56c7966dae7f719702147686fdc7a0a3b6b4e959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
