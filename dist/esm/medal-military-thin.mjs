export const name="medal-military-thin";
export const id="dl_5261579b861044f09694";
export const url=new URL("../icons/medal-military-thin.svg?v=87a47b1cd0c0dbb240afe78d09233691f6fd08ea53202f9d06f995c1e232ce90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
