export const name="airplane-taxiing-bold";
export const id="dl_62d7903f1119439aa1f4";
export const url=new URL("../icons/airplane-taxiing-bold.svg?v=0193e292ea0f942aacc08eefefafed94819d859b47d2fa2779dc409776a4923f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
