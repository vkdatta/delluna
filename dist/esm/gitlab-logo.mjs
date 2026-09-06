export const name="gitlab-logo";
export const id="dl_96a0694f4a4247849d35";
export const url=new URL("../icons/gitlab-logo.svg?v=b4ba9629ae8cfe87427b441a3920d2b538aabbaa8aaad10127ba86189c4c71be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
