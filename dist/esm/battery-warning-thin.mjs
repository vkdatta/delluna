export const name="battery-warning-thin";
export const id="dl_aa619346ddaa4b988376";
export const url=new URL("../icons/battery-warning-thin.svg?v=a5ebecafdf373f249c93dc317dde680e237ff8c30c4f0a02609e90cfe7e4817b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
