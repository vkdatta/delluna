export const name="brackets-angle-thin";
export const id="dl_4beacb3128d84f9082c6";
export const url=new URL("../icons/brackets-angle-thin.svg?v=0eeaaab1bf1c9e7faeae085878008928258c5460dec8fe9b655def32be638b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
