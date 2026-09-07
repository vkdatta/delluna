export const name="hourglass-simple";
export const id="dl_310e1f673af14260be87";
export const url=new URL("../icons/hourglass-simple.svg?v=d2c72061bfb84ef2e0420f758b9175486cef002a434b7bf8e692272891898c59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
