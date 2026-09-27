export const name="gift-thin";
export const id="dl_a003b64c76d84b8ebab7";
export const url=new URL("../icons/gift-thin.svg?v=8fce59e8f5a18b0ab11b80021a1745fdb8c281b5f522918e1c137be280054b71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
