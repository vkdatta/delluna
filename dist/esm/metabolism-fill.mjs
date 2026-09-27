export const name="metabolism-fill";
export const id="dl_55e9d49c27e5b1e81537";
export const url=new URL("../icons/metabolism-fill.svg?v=39de34a773bd484fcceb1d72a59475b87776612a049a43acab04bc7be3cad785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
