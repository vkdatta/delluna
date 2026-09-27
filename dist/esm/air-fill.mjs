export const name="air-fill";
export const id="dl_140efa2a8e780defead5";
export const url=new URL("../icons/air-fill.svg?v=603ceb8c503e9e088f74db1d14ecf1a3947414d858224e2a11c0529bbc73370e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
