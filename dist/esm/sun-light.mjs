export const name="sun-light";
export const id="dl_023d7918d7174e99922a";
export const url=new URL("../icons/S/sun-light.svg?v=bc3557822da55c4ebe6f80d68a0a7992b13060c0754a0ad7953d2321530777f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
