export const name="dribbble-logo-thin";
export const id="dl_0cfea7b3fb1f4e0c894c";
export const url=new URL("../icons/dribbble-logo-thin.svg?v=36200811518b528293916073293f6c8473506be18b153e8f1f3d23d79cd7eed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
