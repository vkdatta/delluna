export const name="outdoor_garden-fill";
export const id="dl_7e5174eb8ebb49e4bde7";
export const url=new URL("../icons/outdoor_garden-fill.svg?v=352597c47c54104792d8f424898e6c5f48813f9a78f47a65ad60c89259ea9094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
