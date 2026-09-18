export const name="help-fill";
export const id="dl_29e57c0a35034297b0fe";
export const url=new URL("../icons/help-fill.svg?v=4ed571de2ca3faf4668c25be58bc8574000da5d56919eb0ac7d848ed29402018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
