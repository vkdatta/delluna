export const name="tray-thin";
export const id="dl_4304f3577f7bdd2df0c3";
export const url=new URL("../icons/tray-thin.svg?v=a7c3f95d9600ecf7bad384504a465f6906eecc9b26e8b8f1fd66b21fbecb448a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
