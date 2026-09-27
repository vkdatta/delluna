export const name="greater-than-light";
export const id="dl_9dec16d5b20a47dd99ed";
export const url=new URL("../icons/greater-than-light.svg?v=00bcf1895470fc15727ed99aabcb90e06795b5cd0ed7902a120a69a1fd21079d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
