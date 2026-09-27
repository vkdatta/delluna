export const name="interests-fill";
export const id="dl_a8ca6c3e880ce122fc9f";
export const url=new URL("../icons/interests-fill.svg?v=62b2849a174c9062e475669d37b3b974193da32486c586bf19a570262979a00f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
