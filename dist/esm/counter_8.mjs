export const name="counter_8";
export const id="dl_2dfffd21cbfa4c6f94be";
export const url=new URL("../icons/C/counter_8.svg?v=6380e13352a8e447819ca85acd998d014a7cf0e5b12d0e9690d2dea1fd9e34b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
