export const name="arrow-elbow-up-right-light";
export const id="dl_1013cdff7ea2486d9837";
export const url=new URL("../icons/arrow-elbow-up-right-light.svg?v=b44d2f85e100211587cb4d28eae031800d3f0e2dcca3a3cb52a45ca2b5da70e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
