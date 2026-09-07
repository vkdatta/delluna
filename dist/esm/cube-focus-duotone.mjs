export const name="cube-focus-duotone";
export const id="dl_b3eefedd5fed48b28a90";
export const url=new URL("../icons/cube-focus-duotone.svg?v=74568dd906e2e58eea7a38a6b6635c130747f0969fa03b914442adb4dddbdc63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
