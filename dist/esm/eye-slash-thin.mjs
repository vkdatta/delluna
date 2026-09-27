export const name="eye-slash-thin";
export const id="dl_35dbfe812e3d40d5a090";
export const url=new URL("../icons/eye-slash-thin.svg?v=70c0190a6b9b72b2ca086989d3cee4fbc2ae59847f8a7e9ad775153bc9f1a1ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
