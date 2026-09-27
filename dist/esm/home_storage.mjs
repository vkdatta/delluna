export const name="home_storage";
export const id="dl_7bf10bc8f84346ec49ac";
export const url=new URL("../icons/home_storage.svg?v=394d00d96acaef194d65b59df01cbf7c24ac76e0349e1e2d016eeabc11cc2b29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
