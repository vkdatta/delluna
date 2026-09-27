export const name="bia-fill";
export const id="dl_18ff2fa4b074fc8971d4";
export const url=new URL("../icons/bia-fill.svg?v=b404270cdafdf20b8fa7044cee895493367a30b247559136dc697b800eaee7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
