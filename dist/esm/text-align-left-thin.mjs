export const name="text-align-left-thin";
export const id="dl_b340d00670054ac29ea5";
export const url=new URL("../icons/T/text-align-left-thin.svg?v=25a2c71d16db5c7017035f2afd79bffe78093d396e767c55964d5ed8f5cc5963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
