export const name="flag_circle-fill";
export const id="dl_339107b10c41492f8571";
export const url=new URL("../icons/flag_circle-fill.svg?v=14a9469e1ce4eda9f4c1dfe1ef215ba68db9ca0179e21a0323f3557ee0d35ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
