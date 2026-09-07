export const name="clock-user-bold";
export const id="dl_e52bdd620cee4fe79072";
export const url=new URL("../icons/clock-user-bold.svg?v=2759587d61880be5424ed79568f6a95c0156be39ef6fd0ea66ec8890a0db4d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
