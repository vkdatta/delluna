export const name="arrow-square-down-left-light";
export const id="dl_d348b9feece343e585b5";
export const url=new URL("../icons/arrow-square-down-left-light.svg?v=4272bb56bdc0d52a5a0134a2f9ad9767e95716588d54fd5d7c8fbf56fac55ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
