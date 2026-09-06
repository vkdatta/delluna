export const name="lightning-slash-fill";
export const id="dl_6cee9b0882b543128bbb";
export const url=new URL("../icons/lightning-slash-fill.svg?v=535cc601cc1862d88a0f7e3943f5b1669e6f5a7d258f36237a20d92a6d6790f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
