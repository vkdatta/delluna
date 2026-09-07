export const name="trash-2";
export const id="dl_45a3af58b26646a7b00a";
export const url=new URL("../icons/trash-2.svg?v=2b6919d8eed772e53163b4f038393b7a70adcaaeedc4fa7ce6368ceb974d0ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
