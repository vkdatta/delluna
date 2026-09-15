export const name="flash_on";
export const id="dl_f8fc667db6e249788a1d";
export const url=new URL("../icons/F/flash_on.svg?v=141441c68432248e3e56e75c76f2c015e99e8140c4186f1aa3316686085784c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
