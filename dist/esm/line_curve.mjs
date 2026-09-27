export const name="line_curve";
export const id="dl_98704e91580d5f2fa703";
export const url=new URL("../icons/line_curve.svg?v=890cb58d3e4fa11c9551be72d5561f3a656e3084485815cad475c85e77361ee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
