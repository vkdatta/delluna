export const name="file-audio";
export const id="dl_2a474ddb2a4f4e7c8a68";
export const url=new URL("../icons/file-audio.svg?v=dd6ad8502a0a12f11933948dd0826f08ebc688960f16aaa4f623a32a9f625b75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
