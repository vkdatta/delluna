export const name="device-rotate-thin";
export const id="dl_eac715be3d324b7badf8";
export const url=new URL("../icons/device-rotate-thin.svg?v=373b4d748d4a9863179c297db114ea68cba0aba2ddb6828aed0af5015c29f386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
