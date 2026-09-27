export const name="text-align-justify-light";
export const id="dl_9a4730c8ac4eb37ae7ce";
export const url=new URL("../icons/text-align-justify-light.svg?v=ab08f560936e8c6e81ba019b106b9eaa4a9dc9ae5a50d7fdcc8c841c2fdf04cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
