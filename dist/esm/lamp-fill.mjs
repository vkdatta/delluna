export const name="lamp-fill";
export const id="dl_9e9fa4973e704475b91b";
export const url=new URL("../icons/lamp-fill.svg?v=44a77694d145e181d252245626b36db691e4953100b69f640b504ae5515d8fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
