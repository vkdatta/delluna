export const name="box-arrow-down-thin";
export const id="dl_76b5f7a0655142d7ada3";
export const url=new URL("../icons/box-arrow-down-thin.svg?v=4866ac4dcd34674a3c65fbf24da9f1dad3b08d70e8fc5055823828b73ccdd362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
