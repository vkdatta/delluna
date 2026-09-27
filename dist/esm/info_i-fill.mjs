export const name="info_i-fill";
export const id="dl_5bd0481794b500906e3e";
export const url=new URL("../icons/info_i-fill.svg?v=adb23c5cf6cc256b2f728299efb9995ac68945cdbdcf4ddd7618c39c80074a74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
