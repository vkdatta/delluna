export const name="battery-vertical-low-thin";
export const id="dl_bacff225d219493cb39a";
export const url=new URL("../icons/battery-vertical-low-thin.svg?v=850f26cfc65632fe456da054d6018e98f3fd1add18e3baa4894eb267b33d1433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
