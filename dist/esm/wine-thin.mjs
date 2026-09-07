export const name="wine-thin";
export const id="dl_7d29328e3c74481b94f5";
export const url=new URL("../icons/W/wine-thin.svg?v=e4664c7a9f2fce896090285799355a5cc566fda40f2e3eea7495cb88cf483777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
