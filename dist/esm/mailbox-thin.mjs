export const name="mailbox-thin";
export const id="dl_79c883ad751a46ed906c";
export const url=new URL("../icons/mailbox-thin.svg?v=c7988588d6c425821e8864064446bb76df729d31ae302c188eaf6e2c7b1b8eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
