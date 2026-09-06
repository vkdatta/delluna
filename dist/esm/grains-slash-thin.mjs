export const name="grains-slash-thin";
export const id="dl_b78f5c0af9dc48078dcd";
export const url=new URL("../icons/grains-slash-thin.svg?v=e59f936959fa040cad9fc920249af29e1a184d56e7da35dfd384781abf0f3314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
