export const name="crop_9_16";
export const id="dl_5fe798a43a5e46c5a008";
export const url=new URL("../icons/C/crop_9_16.svg?v=3843a26243952a3b4a4c475ac258faffcfa32432c2efcc32fbf4a4d54dd551eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
