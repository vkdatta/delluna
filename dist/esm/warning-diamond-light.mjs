export const name="warning-diamond-light";
export const id="dl_a00432d723ca412ea3dd";
export const url=new URL("../icons/W/warning-diamond-light.svg?v=705239f7b5e243468530a36ebb4c79e1cb31563a0e11442283cd44ed89cf87e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
