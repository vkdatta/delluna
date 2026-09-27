export const name="arrows-out-simple-light";
export const id="dl_37655120ce6847459174";
export const url=new URL("../icons/arrows-out-simple-light.svg?v=598808afb5da8fb22436b5562c4791ad36a8e4bab2437718e5dae0a1b91b193d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
