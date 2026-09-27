export const name="screenshot_tablet-fill";
export const id="dl_08d410ba55c24b4319e0";
export const url=new URL("../icons/screenshot_tablet-fill.svg?v=91e7e0688b206c37a04a3c3248a1a10d18bffe57f1abb8669d83b2d6e826ee14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
