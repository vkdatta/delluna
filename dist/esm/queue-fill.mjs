export const name="queue-fill";
export const id="dl_de678065c1a74cc0befb";
export const url=new URL("../icons/queue-fill.svg?v=ac8e8974182e908804dcebc393377535686a86620c9657c42c4d46cbd041734f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
