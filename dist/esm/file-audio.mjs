export const name="file-audio";
export const id="dl_2a474ddb2a4f4e7c8a68";
export const url=new URL("../icons/file-audio.svg?v=ecfb7a722ec7a4576ea1c83c893aa557931415910bf7e206de11f513fa3a0c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
