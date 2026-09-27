export const name="arrow-bend-up-right-bold";
export const id="dl_1843b9af9b914328ba60";
export const url=new URL("../icons/arrow-bend-up-right-bold.svg?v=46d377c7d16778d2e297a93bcc9e71d945f7ee2e8592e17dc695a3f13c3452c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
