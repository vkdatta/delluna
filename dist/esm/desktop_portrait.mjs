export const name="desktop_portrait";
export const id="dl_4bda28b4040f459a8fa1";
export const url=new URL("../icons/D/desktop_portrait.svg?v=de9f19d41c53fa7af7c7183c525367fb8dbf241a471f092c68e7cefa26d18065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
