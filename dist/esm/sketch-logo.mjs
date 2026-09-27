export const name="sketch-logo";
export const id="dl_f04bebef1a806d0edaa8";
export const url=new URL("../icons/sketch-logo.svg?v=8dff3a6eb057f6360cb38ea2ddbd434498a41e07b9c2037719cb87c77b15dee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
