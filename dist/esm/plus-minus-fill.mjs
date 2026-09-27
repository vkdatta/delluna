export const name="plus-minus-fill";
export const id="dl_971b891feaa44c23b17d";
export const url=new URL("../icons/plus-minus-fill.svg?v=47280c0892e418fd46895f5cfdfadbad4a0b821718a1f4794613cc5d3f3d9dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
