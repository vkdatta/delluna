export const name="lucid_2-lightbulb-off";
export const id="dl_9d1f369aba5540a096e6";
export const url=new URL("../icons/lucid_2-lightbulb-off.svg?v=688df6f25dc1c1b28136dbaafac7d5bd6b5e6ffeeb6ae36f4e7aefe1ccd5d70e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
