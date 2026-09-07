export const name="paragraph-thin";
export const id="dl_5fa201f8fed842f3b3ff";
export const url=new URL("../icons/paragraph-thin.svg?v=2b2dd046bc71e7806cb0956972e281c87e090ce76fc93afa59b610a8097939d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
