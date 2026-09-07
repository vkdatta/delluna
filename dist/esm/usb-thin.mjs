export const name="usb-thin";
export const id="dl_86dda9639a674a50be22";
export const url=new URL("../icons/U/usb-thin.svg?v=2a3c6c516d05d7804c7a17ba1951e64342ee9530aa677fb3b43b66a053700563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
