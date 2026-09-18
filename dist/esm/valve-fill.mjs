export const name="valve-fill";
export const id="dl_70c05752032f4e4cbbc5";
export const url=new URL("../icons/V/valve-fill.svg?v=8dece31b752cc3dd0e72c3d7b39145e25af1071e5722d535db0c269a042bca7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
