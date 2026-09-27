export const name="outlet";
export const id="dl_152ce81f7d6a76c736d5";
export const url=new URL("../icons/outlet.svg?v=80f579f08d3baccb2fe379bb9925b609b72eff77955f5cfb019234538d45f2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
