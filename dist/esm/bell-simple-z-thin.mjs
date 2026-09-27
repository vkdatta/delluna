export const name="bell-simple-z-thin";
export const id="dl_9c6270b35b224e31b4e8";
export const url=new URL("../icons/bell-simple-z-thin.svg?v=f559f019efc9087f4f922e107e6b0f1e388292928c62cf31e537cdb2058d781c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
