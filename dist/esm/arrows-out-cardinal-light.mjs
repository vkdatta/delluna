export const name="arrows-out-cardinal-light";
export const id="dl_24288cdd69954750bdf8";
export const url=new URL("../icons/arrows-out-cardinal-light.svg?v=68365aa30e4f94fbf84e980b7bb6a49001e4d6b98f962cc2d04d53ca35573144",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
