export const name="arrows-in-simple";
export const id="dl_1338693d412244a9b6a6";
export const url=new URL("../icons/arrows-in-simple.svg?v=882d4752b75686300ec96d454d9f711c4a6c3a79745b003e4f8bdc73c9ea49cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
