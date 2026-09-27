export const name="figma-logo";
export const id="dl_7ec133c3801d4706a431";
export const url=new URL("../icons/figma-logo.svg?v=1eaf7fc8c5d40fda3bb18bb50849bd94b7e93a1889e90210292e64646b1be544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
