export const name="hourglass-simple-high-thin";
export const id="dl_235999113d4c4485a95c";
export const url=new URL("../icons/hourglass-simple-high-thin.svg?v=d5f105a6f163597117bb744d4d3047a5bf3dff57b5089d9fc979e4878cfd8241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
