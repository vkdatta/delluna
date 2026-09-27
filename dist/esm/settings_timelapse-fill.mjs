export const name="settings_timelapse-fill";
export const id="dl_3e33d571d331810e1f5c";
export const url=new URL("../icons/settings_timelapse-fill.svg?v=bb2b9ce05ee1a6a9f915bc564899ea56545dc7ba05e1d6cdcab5ad244c8ee842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
