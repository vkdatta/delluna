export const name="orange-slice-thin";
export const id="dl_ee59532f62d248bdac58";
export const url=new URL("../icons/orange-slice-thin.svg?v=7ddf03f327fde1d9ce31dd35214f06824ba70c28a624766ca8e697dbe4cdcf8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
