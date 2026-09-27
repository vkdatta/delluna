export const name="square-minus";
export const id="dl_4accee062c114ff78f8b";
export const url=new URL("../icons/square-minus.svg?v=dc4cf8f200d2c932453712223939373a38739b01f20c602e52e157ae456bfc5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
