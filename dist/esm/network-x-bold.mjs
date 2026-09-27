export const name="network-x-bold";
export const id="dl_ed7403358a2047408ee2";
export const url=new URL("../icons/network-x-bold.svg?v=34e36da908972fd2b50257ec4a6e8caf78df22983d741d825d5bd56bbc81c240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
