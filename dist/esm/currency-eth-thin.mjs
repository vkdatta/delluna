export const name="currency-eth-thin";
export const id="dl_68c6968463ba466683c6";
export const url=new URL("../icons/currency-eth-thin.svg?v=f465adb6cc2c85bbe2e89e9689272ced50a968fbea5caeaa67309076606828d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
