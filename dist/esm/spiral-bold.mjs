export const name="spiral-bold";
export const id="dl_c49144842a50b39f9568";
export const url=new URL("../icons/spiral-bold.svg?v=7110186d163f3a4945068306b2fe9d1516a0e59859f91947139a202514807dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
