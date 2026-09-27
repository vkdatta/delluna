export const name="instagram-logo-thin";
export const id="dl_37afefa72ec74e2b889b";
export const url=new URL("../icons/instagram-logo-thin.svg?v=cdc16d3c30123ca4abd802a238a6a989a4d2fa9be230a387c988aeb6d64c4c98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
