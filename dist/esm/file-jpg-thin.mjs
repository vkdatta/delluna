export const name="file-jpg-thin";
export const id="dl_385838cf82ca43c68821";
export const url=new URL("../icons/file-jpg-thin.svg?v=afcb10afbafd207de5dd5ef11a22130c7cb55fdb3be92984c0c44d41fa3441ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
