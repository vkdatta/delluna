export const name="door-open-thin";
export const id="dl_fd83b565c14e465a8c80";
export const url=new URL("../icons/door-open-thin.svg?v=6ce0b740c574f602068e0afe4a3985fda02c5ec03fe5aeb69fe4a54b3cf1e117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
