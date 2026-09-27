export const name="arrow-arc-right-thin";
export const id="dl_f787fb8f66cf4e0e8f0d";
export const url=new URL("../icons/arrow-arc-right-thin.svg?v=163b50ecae5531c859ee97b9dc6312a51f70e7ce17025bcd07d2215976f5d9b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
