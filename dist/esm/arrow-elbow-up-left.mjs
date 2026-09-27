export const name="arrow-elbow-up-left";
export const id="dl_91ea48f1e1cf4ea1981c";
export const url=new URL("../icons/arrow-elbow-up-left.svg?v=780de527387c9ca53bdfa70d9d98f30ef1b2e5f86421348c3fbadd4ec2af0b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
