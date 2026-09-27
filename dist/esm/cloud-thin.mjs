export const name="cloud-thin";
export const id="dl_b49bf853394f4bb3800e";
export const url=new URL("../icons/cloud-thin.svg?v=8db17ac9d24e9977bf9a955c121617b4e99dedd11667d88ca80e61db2d1ffe11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
