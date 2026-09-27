export const name="scribble";
export const id="dl_c3066c430a00a8a3732f";
export const url=new URL("../icons/scribble.svg?v=aaf543d549b6cfced0207734df5d74a677e94928735da9cf3b45420984624150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
