export const name="queue-thin";
export const id="dl_27111c6ac6ea41db8d3d";
export const url=new URL("../icons/queue-thin.svg?v=4e040e007fa8d6586f074fdfa4e6dba18fb11103e4c5de0db2afe7be1536e0f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
