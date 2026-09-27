export const name="at-bold";
export const id="dl_47ce5372452f4742a5e9";
export const url=new URL("../icons/at-bold.svg?v=9715c7f3e7ab6307dc0b1eee22989435fd40b89fcd6accbea60ec683b9eaa5c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
