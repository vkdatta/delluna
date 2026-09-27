export const name="share_windows-fill";
export const id="dl_064368b497e42f1feb36";
export const url=new URL("../icons/share_windows-fill.svg?v=bd80686982b4f6d6dc0737838f74a7fcdafcbc3563d989683e43fa18dcee9ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
