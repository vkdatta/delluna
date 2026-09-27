export const name="volleyball-thin";
export const id="dl_28ef443f2c4c49eb7dd0";
export const url=new URL("../icons/volleyball-thin.svg?v=33bc1a6ed9599314d0104dba228e82958d6af7282a711143c4bd6df139a1639a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
