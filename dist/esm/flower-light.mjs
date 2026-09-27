export const name="flower-light";
export const id="dl_56bc355e1bbd4b5aa5be";
export const url=new URL("../icons/flower-light.svg?v=a2294586b4a40204523dee32ee1738351cd023c8cf17a061f953e27c7587ce3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
