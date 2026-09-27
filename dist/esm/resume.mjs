export const name="resume";
export const id="dl_c7eea8fc744ab7d836ec";
export const url=new URL("../icons/resume.svg?v=1953aa8d4a3508cf2b22dc8c31f5d502abdcaf3a3d547d39b35ef4963b3ece85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
