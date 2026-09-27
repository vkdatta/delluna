export const name="spatial_speaker-fill";
export const id="dl_7466edc5ac4fe717c71f";
export const url=new URL("../icons/spatial_speaker-fill.svg?v=144e0b229d5d4027e3b394f2e9f1a3ddfd805f929c5f4316b210ecfe95e7e5d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
