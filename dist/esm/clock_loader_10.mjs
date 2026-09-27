export const name="clock_loader_10";
export const id="dl_2ff614008335308cb249";
export const url=new URL("../icons/clock_loader_10.svg?v=fc31b2f79b587cc419da5e041b16e44703c89751f75163ddf1d6452ab7a63d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
