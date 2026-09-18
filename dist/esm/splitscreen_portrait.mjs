export const name="splitscreen_portrait";
export const id="dl_2b87b7c0101b42e5a883";
export const url=new URL("../icons/S/splitscreen_portrait.svg?v=6da68a9408ef4f6032307e6992c1845c0780b93380aec9a14dc73d5361d652cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
