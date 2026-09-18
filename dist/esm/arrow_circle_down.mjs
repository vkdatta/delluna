export const name="arrow_circle_down";
export const id="dl_65274dbc7cbb4d14a4b1";
export const url=new URL("../icons/arrow_circle_down.svg?v=01c1d90f06cee908994051ac7661821b2a192e147a8370dd9ebe9cac5687527a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
