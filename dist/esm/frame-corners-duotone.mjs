export const name="frame-corners-duotone";
export const id="dl_d8af9f65e9e548c49c9f";
export const url=new URL("../icons/frame-corners-duotone.svg?v=71283efc91a6856582e4b9191737b6dc4f779442ff6dd9e824de7881fc674098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
