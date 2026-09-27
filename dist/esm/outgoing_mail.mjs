export const name="outgoing_mail";
export const id="dl_03ddd907782ad594559d";
export const url=new URL("../icons/outgoing_mail.svg?v=bf610b8c77d282be93d63b2f106f7bec9c951add5a45c57620f5403f79aec57b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
