export const name="preview";
export const id="dl_5a215d42486ea5f85cee";
export const url=new URL("../icons/preview.svg?v=7b425beb9c33d3fc2cc1f4c11155f9d3ab5d557c952bc89bfd3795bd8ee37dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
