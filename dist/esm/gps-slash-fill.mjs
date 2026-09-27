export const name="gps-slash-fill";
export const id="dl_3e94be810a974778be57";
export const url=new URL("../icons/gps-slash-fill.svg?v=dd449443f912e2cb1286e903b1ed22b1104392b596ab9d6f4d3578736a84e662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
