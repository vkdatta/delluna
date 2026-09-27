export const name="waveform-thin";
export const id="dl_1a6fd9e32da8a218079e";
export const url=new URL("../icons/waveform-thin.svg?v=9e2b05df96c4dec763bc032b6c7400d290a4f85c77c341d5fcc803b48f977714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
