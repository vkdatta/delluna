export const name="peace-thin";
export const id="dl_7514d244a004490fbc89";
export const url=new URL("../icons/peace-thin.svg?v=5bcd696d35a67087bf44392bfcb19b3cf07ca5ea6519586e3e9a63351c5a8f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
