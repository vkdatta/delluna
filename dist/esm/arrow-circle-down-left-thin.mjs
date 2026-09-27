export const name="arrow-circle-down-left-thin";
export const id="dl_a1fc30702bba4fe69972";
export const url=new URL("../icons/arrow-circle-down-left-thin.svg?v=2b87f7b3603d8680fab906086ea908e38c090d5a32bd75cc6975bb0c043c5730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
