export const name="leaf";
export const id="dl_260482e3c3d842d78098";
export const url=new URL("../icons/leaf.svg?v=2b0028b0d88c0ba29873dd0d27d938ecbd56f6cf73591a1afbb3370c92c14cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
