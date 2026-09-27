export const name="lucid_2-gallery-vertical-end";
export const id="dl_f5c16e9647e04d8f855d";
export const url=new URL("../icons/lucid_2-gallery-vertical-end.svg?v=d0236b5cb1c0d86196a9945df4ddbee23784f08faf66b43289a5feb9ec4164eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
