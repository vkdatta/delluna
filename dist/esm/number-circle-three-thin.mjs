export const name="number-circle-three-thin";
export const id="dl_3f47c4c5afb04a25ada1";
export const url=new URL("../icons/number-circle-three-thin.svg?v=b634ffc70089e34f5d841665eb3c19a4129ee2dc759ce9e5b2d5db9347675a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
