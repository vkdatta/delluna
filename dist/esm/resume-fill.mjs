export const name="resume-fill";
export const id="dl_d522ad6c40495843770d";
export const url=new URL("../icons/resume-fill.svg?v=8e95a6919db6d143fd9f6dafdf3d1e0e4811829b8bc099b262babcdbdd11eb2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
