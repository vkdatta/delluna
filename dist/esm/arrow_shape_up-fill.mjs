export const name="arrow_shape_up-fill";
export const id="dl_2a50976dc0c5133c8980";
export const url=new URL("../icons/arrow_shape_up-fill.svg?v=178a55214189c4073a5564ab0bfe2f40a35eb001dca9deaf664245100413e4bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
