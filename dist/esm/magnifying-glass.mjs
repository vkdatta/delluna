export const name="magnifying-glass";
export const id="dl_35b412a8f8754cf59680";
export const url=new URL("../icons/magnifying-glass.svg?v=9333bb79c27ba9603c52ffee403cec5353b43fe601567e5a8cc7fe7192ddff08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
