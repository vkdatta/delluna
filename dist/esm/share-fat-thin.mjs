export const name="share-fat-thin";
export const id="dl_43871018b33f71a4c027";
export const url=new URL("../icons/share-fat-thin.svg?v=4797bc081363756ae024b1dda14e044712b4ca765a4fe658b4726f07d17adbea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
