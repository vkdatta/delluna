export const name="align-left-light";
export const id="dl_6551c8876fda45fc90fb";
export const url=new URL("../icons/align-left-light.svg?v=2e165a9a528da4809a201f4551022aa6f1a09f5b250429a27a7c7607974e9ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
