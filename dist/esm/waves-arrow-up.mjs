export const name="waves-arrow-up";
export const id="dl_f7b314b76ef0489b8e5c";
export const url=new URL("../icons/waves-arrow-up.svg?v=84d24e64485539c9bc78eb1c38dfe4dfdc16cbe11842a939d6c64de92c6cc0ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
