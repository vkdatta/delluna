export const name="arrow-line-up-right-bold";
export const id="dl_b3f5746dea3947e7a9d4";
export const url=new URL("../icons/arrow-line-up-right-bold.svg?v=ed10fb35a2fd32ab8b07320aba760566505dba76bd96c7946dd619ada1c52043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
