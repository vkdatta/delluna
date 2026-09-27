export const name="lucid_1-circle-arrow-out-up-left";
export const id="dl_5be149d43dc0464c8227";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-left.svg?v=db11873de67a5962e0a813776c404325d8e313de5d911e5c4ab18dc91de4e3bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
