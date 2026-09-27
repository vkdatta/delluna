export const name="horse-thin";
export const id="dl_9e994a19339842ef8166";
export const url=new URL("../icons/horse-thin.svg?v=c7803ce1d56d24f9713186d4b662e36a20afcd7245d7d8aa408955c441cd9818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
