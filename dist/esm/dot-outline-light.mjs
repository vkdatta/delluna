export const name="dot-outline-light";
export const id="dl_84db8e1ee157462486ea";
export const url=new URL("../icons/dot-outline-light.svg?v=0f3de249871de827d3c170c756a5300e792cf4d7bcdbcec52726ff37ff9b0956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
