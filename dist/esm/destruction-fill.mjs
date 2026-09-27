export const name="destruction-fill";
export const id="dl_6b1ec22a6acb324c061e";
export const url=new URL("../icons/destruction-fill.svg?v=f6581c73fa519d3cf82f9b1ef533a533b3db037dc0ca646f92deeaeb73ce37a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
