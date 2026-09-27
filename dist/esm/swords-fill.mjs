export const name="swords-fill";
export const id="dl_befbe68ac52d74cc415a";
export const url=new URL("../icons/swords-fill.svg?v=cbdb568a0d51d7506d0090a5cc88a17305385509d3f853d7ac4bf29cefc7ffc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
