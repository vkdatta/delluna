export const name="sun-bold";
export const id="dl_240f95ca68a4dfba4725";
export const url=new URL("../icons/sun-bold.svg?v=ccd70e48d05400fe5d0ed1f84271895688873058b44f03ebcfa39a19d33f1ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
