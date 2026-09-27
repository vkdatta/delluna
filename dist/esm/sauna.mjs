export const name="sauna";
export const id="dl_08bc4c18b7d66f68a3e5";
export const url=new URL("../icons/sauna.svg?v=187fc367117855bea2a1bd2d8004d580cb5b5726d98667f455883b3d06e6e94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
