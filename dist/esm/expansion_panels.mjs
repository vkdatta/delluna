export const name="expansion_panels";
export const id="dl_7cbea527732f66cb3f2e";
export const url=new URL("../icons/expansion_panels.svg?v=c0b7b9b0a5920226324fbf4c0b6c027b09aac60c979ca7745557209905bd1c41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
