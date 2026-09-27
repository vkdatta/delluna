export const name="air_freshener-fill";
export const id="dl_8e77f3f32be59f5a77d3";
export const url=new URL("../icons/air_freshener-fill.svg?v=51cc31e7fae6f96c4c820dfe80470f31f369ad50b0e5b1c9056216fbce231efe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
