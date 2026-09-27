export const name="code-simple-duotone";
export const id="dl_7d849f4a6b4e4411aa55";
export const url=new URL("../icons/code-simple-duotone.svg?v=edc45741144c51e034b9248676fcfb0fd6be7f0fa2aea57716a6b43937c41181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
