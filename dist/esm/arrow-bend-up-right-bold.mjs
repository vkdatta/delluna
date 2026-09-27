export const name="arrow-bend-up-right-bold";
export const id="dl_1843b9af9b914328ba60";
export const url=new URL("../icons/arrow-bend-up-right-bold.svg?v=812e30c12a936116e5f71e8402e46349cfd7071e2a97c4a845b74683cb0c673d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
