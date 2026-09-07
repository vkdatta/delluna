export const name="shuffle-thin";
export const id="dl_5ff11c443b854e3195d4";
export const url=new URL("../icons/S/shuffle-thin.svg?v=1f714b76b92c7683444440c74bbd2e00ca09b61af620f5aa205b1247c6bbf741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
