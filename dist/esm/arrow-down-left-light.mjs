export const name="arrow-down-left-light";
export const id="dl_6701193f0e1f448bb552";
export const url=new URL("../icons/arrow-down-left-light.svg?v=df950757868d4f497f6a9ed9496ec1f9c39ba26eb7725de6b91a68b711dd011c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
