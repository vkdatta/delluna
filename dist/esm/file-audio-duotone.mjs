export const name="file-audio-duotone";
export const id="dl_725fa813ca5a4d45b9f7";
export const url=new URL("../icons/file-audio-duotone.svg?v=a635388dee56314389bbe1acee799f5f3a04e4b9aeab5e5f6cf0acf003000adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
