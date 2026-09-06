export const name="device-mobile-slash-thin";
export const id="dl_4f1b8ddf35d1448c9e89";
export const url=new URL("../icons/device-mobile-slash-thin.svg?v=8ab49c70b90f1111e00c2532901bcd241745c268f570f70d81f4b22bca10ddd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
