export const name="home_speaker-fill";
export const id="dl_39df73c717564460df27";
export const url=new URL("../icons/home_speaker-fill.svg?v=b07b73ea0e1520f4645a41528ff0c8867fdb987174ab4c3e010df47cd21bdf11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
