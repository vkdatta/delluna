export const name="grains-slash-bold";
export const id="dl_91670d3057244bd5a828";
export const url=new URL("../icons/grains-slash-bold.svg?v=93b058190998cfc745823e6ec213b82d49853f5a2eedb719fbe8a05a44bd9ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
