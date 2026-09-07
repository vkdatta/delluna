export const name="suitcase-simple-fill";
export const id="dl_c8135cafe5044b8c8ca4";
export const url=new URL("../icons/S/suitcase-simple-fill.svg?v=4f4805d0b8b0090b9cc3be37f9286f703a2e084f9b4ea12bd1f714ccdd71dbf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
