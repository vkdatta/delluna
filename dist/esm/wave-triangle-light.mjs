export const name="wave-triangle-light";
export const id="dl_d9f7e3e302664b898e66";
export const url=new URL("../icons/W/wave-triangle-light.svg?v=344b3987e6c8c6be05d745aee129afca951ab68967743612296c6db7d58b0322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
