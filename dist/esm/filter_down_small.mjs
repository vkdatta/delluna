export const name="filter_down_small";
export const id="dl_34b608b36e9436246329";
export const url=new URL("../icons/filter_down_small.svg?v=70866490f5cd7fe70c9fa07889ad81ec5669812703fef31401f07feb4f07526e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
