export const name="plus-thin";
export const id="dl_13501357e15542e780cd";
export const url=new URL("../icons/plus-thin.svg?v=5935ea3fbba630de03f648c46b061e7aa5848df38f1046eac8da58eb89cde134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
