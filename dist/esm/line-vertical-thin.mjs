export const name="line-vertical-thin";
export const id="dl_21aa279c8950477e86eb";
export const url=new URL("../icons/line-vertical-thin.svg?v=ff2a24918600a16abf83a4a59f3a80eaeb3819b8e1960cffe081d831709aa615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
