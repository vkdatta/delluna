export const name="feather-light";
export const id="dl_9eb12dfb08f647189170";
export const url=new URL("../icons/feather-light.svg?v=714e87f8f7c8b2b537c926c4630a9a7064a5736261dfc80580fe1cc769d71164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
