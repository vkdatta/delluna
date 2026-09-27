export const name="umbrella-thin";
export const id="dl_981f67591920131196c2";
export const url=new URL("../icons/umbrella-thin.svg?v=cb8c5a48051c908baaef1b27d134273e5f66448dc400f7abc846252dca912e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
