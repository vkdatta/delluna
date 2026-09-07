export const name="gps-fix";
export const id="dl_f8a6121f5e074244ae1c";
export const url=new URL("../icons/gps-fix.svg?v=cb5f6452ec0637dbdc0e1691dc8ba4a2691209f7df6ffbdca0753e63949cca8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
