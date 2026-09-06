export const name="ambulance";
export const id="dl_ae704a91e8bd4bc6a6a7";
export const url=new URL("../icons/ambulance.svg?v=1ae30705aa7b5339a13594ed4e0985e94ce956f65e03e8feea29a4d0756a20d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
