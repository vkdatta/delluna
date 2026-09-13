export const name="8k_plus";
export const id="dl_9990012594234773a16e";
export const url=new URL("../icons/8/8k_plus.svg?v=4fa422b1ac0f024077bba519eb5a6e1c3776607b1774bea1d7f1139b9c59e692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
