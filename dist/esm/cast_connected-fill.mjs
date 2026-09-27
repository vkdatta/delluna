export const name="cast_connected-fill";
export const id="dl_a0f5110012854d28d090";
export const url=new URL("../icons/cast_connected-fill.svg?v=bc317bb209b925a6427b55e8ef59bb5cfd73b69ef9e104451a62744a28741c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
