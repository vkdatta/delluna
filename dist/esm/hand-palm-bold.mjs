export const name="hand-palm-bold";
export const id="dl_44403990bad441078b10";
export const url=new URL("../icons/hand-palm-bold.svg?v=aa8a79f768533362a20e9adceb40d968385809c1c28f8bcf28cf5c6c6df0af4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
