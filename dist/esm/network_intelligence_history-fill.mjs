export const name="network_intelligence_history-fill";
export const id="dl_bf9e48ca4c566bdcea65";
export const url=new URL("../icons/network_intelligence_history-fill.svg?v=bcdc44e7fa48f2d04161dd7a3cf58aa2c65ea1ae94a3ef5676693b6db6107c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
