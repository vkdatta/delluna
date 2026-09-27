export const name="caret-circle-up-down-duotone";
export const id="dl_613fd99b16c54c479441";
export const url=new URL("../icons/caret-circle-up-down-duotone.svg?v=66cb7eed7454b02ad8a0f131395e9bb4949dcdd90a3d4fcbad7f689640235649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
