export const name="squares-four";
export const id="dl_7c2de238a7e34b038e3d";
export const url=new URL("../icons/S/squares-four.svg?v=f70d6b20e08e028ab5b1714077681910a2431092cf7a23b82366ddaec554ab87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
