export const name="grains-slash-fill";
export const id="dl_6edd05994a6c477bb6bd";
export const url=new URL("../icons/grains-slash-fill.svg?v=a01fe95f0e20c46c6bba7ca41550fc02249e40563ec942e4ecbd640c6f1cabb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
