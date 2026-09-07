export const name="train-regional";
export const id="dl_533b06a450b4418d9d5d";
export const url=new URL("../icons/T/train-regional.svg?v=2eb9d1fece7308cee0d21e21d357dda145e8acb22c75b6f4e8ce9115a6067ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
