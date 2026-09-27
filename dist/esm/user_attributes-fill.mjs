export const name="user_attributes-fill";
export const id="dl_1a4af315d7b8edcfa3db";
export const url=new URL("../icons/user_attributes-fill.svg?v=65e3e80f1abae0ca06dc6927257bb137850b03c53eda19ffb0f64b9f626ec66f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
