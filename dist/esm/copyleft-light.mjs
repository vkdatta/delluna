export const name="copyleft-light";
export const id="dl_e0de3ae9d877448b8979";
export const url=new URL("../icons/copyleft-light.svg?v=7b7d0682ef7cd26e44c393b2654a1e5d10886e509f65f93381674d0a219cc608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
