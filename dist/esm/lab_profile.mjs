export const name="lab_profile";
export const id="dl_06bb871f2d5ae3261ec7";
export const url=new URL("../icons/lab_profile.svg?v=e39b5600da8f7816558c6c8a9216dc09a7fe867b45cb32307bc8fff6ab18ea78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
