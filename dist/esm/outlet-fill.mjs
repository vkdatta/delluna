export const name="outlet-fill";
export const id="dl_89fc895b9b0b48de8434";
export const url=new URL("../icons/O/outlet-fill.svg?v=ad33d4d6e3d67d79ceb97f320d97e2c423578c4197eaf611a34bef0027c5a55d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
