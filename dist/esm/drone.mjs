export const name="drone";
export const id="dl_22aab0710c054fc3adc7";
export const url=new URL("../icons/drone.svg?v=469751f00c5a5e3e1c8044984483cbf437e1614f709be39b88bb5b4bc9eb25d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
