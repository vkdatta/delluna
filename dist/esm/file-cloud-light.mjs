export const name="file-cloud-light";
export const id="dl_94521b415892407db452";
export const url=new URL("../icons/file-cloud-light.svg?v=7018af9cca2923d80ad388b617def17c92bec8103d4e2fe9d68cb55b1df8cede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
