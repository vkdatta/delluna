export const name="wave-triangle-thin";
export const id="dl_d9d30dea4c0e2092b969";
export const url=new URL("../icons/wave-triangle-thin.svg?v=6b898c0845237a6f9d4b5d2cc33ebad1adeef16382344787fdf10fee637ff05d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
