export const name="lucid_2-folder-up";
export const id="dl_4eb426104ee64160a087";
export const url=new URL("../icons/lucid_2-folder-up.svg?v=30b648ae22b50cf16d0ce56b2dcf9177bfb55f4c88c3a213be59997b5cb608aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
