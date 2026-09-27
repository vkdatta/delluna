export const name="responsive_layout";
export const id="dl_29e94fa8e71219e79b9b";
export const url=new URL("../icons/responsive_layout.svg?v=a9920bb1f464c6200ea8bfe3bc69e97052853e582a920ae4ef05b0e69d405a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
