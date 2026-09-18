export const name="wb_twilight_2-fill";
export const id="dl_21f65db5125b4547bd5e";
export const url=new URL("../icons/W/wb_twilight_2-fill.svg?v=5677db51f091da2f0d9425d0dc8346c827781ac200b0dff3748eb15eeedd75e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
