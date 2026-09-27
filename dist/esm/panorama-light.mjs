export const name="panorama-light";
export const id="dl_026b8d7d8ce6409c9b0c";
export const url=new URL("../icons/panorama-light.svg?v=1f5330f04c31c0c21876079492e801f8585ab11c532397670a994361a7e7145a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
