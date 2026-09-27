export const name="file-audio-duotone";
export const id="dl_725fa813ca5a4d45b9f7";
export const url=new URL("../icons/file-audio-duotone.svg?v=aa6aa083862803c54ee005f3528b91f9bfa3b5174aef38413b49d9ee84f856f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
