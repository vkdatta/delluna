export const name="number-circle-two-thin";
export const id="dl_36502450d836454a81c6";
export const url=new URL("../icons/number-circle-two-thin.svg?v=c8de79d2ab87c41c7961e4c6d611c24df84632f1233c3b5d37ed5f34fc95d008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
