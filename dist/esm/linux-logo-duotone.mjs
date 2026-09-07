export const name="linux-logo-duotone";
export const id="dl_b5756f421751408e8b50";
export const url=new URL("../icons/linux-logo-duotone.svg?v=250b8d06a9bb599eebf6a28c4c96b21ad6d346ca79e75daefe342f2997891be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
