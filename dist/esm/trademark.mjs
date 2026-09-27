export const name="trademark";
export const id="dl_4d61002822fe281290b5";
export const url=new URL("../icons/trademark.svg?v=13bc066d26f61a24d897b3d4dc2fb8a49162b881d9c977a3dd93af560b646bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
