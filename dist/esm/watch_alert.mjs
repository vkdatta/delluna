export const name="watch_alert";
export const id="dl_e13869c7d8addc0287b2";
export const url=new URL("../icons/watch_alert.svg?v=b0d2a3b064246c7de7913a9b10e606bc5292abc669aa896bec1b07e7f9b43966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
