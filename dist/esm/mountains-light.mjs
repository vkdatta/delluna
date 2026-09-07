export const name="mountains-light";
export const id="dl_47d743ce875548e19eb7";
export const url=new URL("../icons/mountains-light.svg?v=5b3cf8fc2d70f3ca5c0e777c0adf2cb09e89d2af7cd463505650536b4fdb79d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
