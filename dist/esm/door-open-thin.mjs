export const name="door-open-thin";
export const id="dl_fd83b565c14e465a8c80";
export const url=new URL("../icons/door-open-thin.svg?v=4b15db5d6c285caab2efb40eedceba9393dfb0597a6818828afef3c9c7397b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
