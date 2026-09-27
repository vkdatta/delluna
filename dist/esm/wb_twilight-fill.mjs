export const name="wb_twilight-fill";
export const id="dl_357239b867538ce652e9";
export const url=new URL("../icons/wb_twilight-fill.svg?v=7a5b85ffc54cff7915c743e68c6a59a2923cf33b71606b0b94eb86fd5960e40a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
