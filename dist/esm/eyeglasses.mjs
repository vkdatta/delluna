export const name="eyeglasses";
export const id="dl_96f572cdd4e14202a95a";
export const url=new URL("../icons/eyeglasses.svg?v=bc2df304b6315f513cef7cc0876e54b99903df456608edd639d3e4e2e1625197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
