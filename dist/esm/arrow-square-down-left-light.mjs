export const name="arrow-square-down-left-light";
export const id="dl_d348b9feece343e585b5";
export const url=new URL("../icons/arrow-square-down-left-light.svg?v=b6283b08c5f04a9530e4188ca55056fcdb5b9ec5acb108634e49ff4cd5dbc668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
