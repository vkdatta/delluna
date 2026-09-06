export const name="file-audio-bold";
export const id="dl_fd9fb4d30c6a44d29f07";
export const url=new URL("../icons/file-audio-bold.svg?v=cbd5336f4b8c55f794f587ef979c892610e0d1af20d5116e2ac47d751e20774b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
