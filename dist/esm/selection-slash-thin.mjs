export const name="selection-slash-thin";
export const id="dl_ddda1f636afe2192a764";
export const url=new URL("../icons/selection-slash-thin.svg?v=347a4a2e3fbbfcb485231af7ece3cb6cbbf80411e7350ad4a2ba371ffb10ae8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
