export const name="upload_file";
export const id="dl_87dd90aaf50e9c3049f7";
export const url=new URL("../icons/upload_file.svg?v=8fd61292cf54d40ffbac548e8bc29c97971097500d807f2bd49041772488f218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
