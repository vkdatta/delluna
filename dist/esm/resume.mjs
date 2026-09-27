export const name="resume";
export const id="dl_c23316b7c10178ad6aaa";
export const url=new URL("../icons/resume.svg?v=aae1e075292af3e08cc667b102a6ee2bb8a6e177348919fcb3a5ecbea1840f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
