export const name="handbag-simple-thin";
export const id="dl_cbbe92d3ac224e1197d3";
export const url=new URL("../icons/handbag-simple-thin.svg?v=93304ee144697c9547bb1324e9bf70e414efaa901f8f6fda52464dbec8ea1974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
