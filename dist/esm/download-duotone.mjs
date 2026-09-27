export const name="download-duotone";
export const id="dl_db313af344cd477d8386";
export const url=new URL("../icons/download-duotone.svg?v=76cbf8656fa3fcc3cab0bba6cfca7560d5fc25e6cc641ee282868283070c584e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
