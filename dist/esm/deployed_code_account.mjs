export const name="deployed_code_account";
export const id="dl_448f6005dd7ebba01f9d";
export const url=new URL("../icons/deployed_code_account.svg?v=4e80efe5fb39dff657bf9e3f25dd7963dfafb37d18d3d45c511ec7e814d0ff12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
